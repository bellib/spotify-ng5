import { Component , HostListener ,OnInit} from '@angular/core';
import { SpotifyService } from './services/spotify.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  screenHeight ;

  constructor(private _spService: SpotifyService) {}

  ngOnInit() {
    /**
     * if users no resize ;
     */
    this.screenHeight = (window.innerHeight) + 'px';
  }
  /*
   * Detect height every resize or change
   * by host listner ;
  */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenHeight = (window.innerHeight) + 'px';
  }
  getToken() {
    this._spService.getToken();
  }
}
