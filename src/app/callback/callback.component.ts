import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _spService: SpotifyService
    , private router: Router
  ) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe( params => {

      const code_string = params.get('code');

      // delet code if exist
      localStorage.removeItem('code');
      localStorage.setItem('code', code_string )  ;
      this._spService. get_string_token();

    });
  }

}
