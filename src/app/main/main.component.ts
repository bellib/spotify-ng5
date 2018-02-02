import { Component, OnInit , HostListener } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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

}
