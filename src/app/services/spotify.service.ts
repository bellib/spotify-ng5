import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CodeReq } from '../modeles/code-req';
import { CllabackCode } from '../modeles/cllaback-code';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient, private router: Router) { }

  getData( value: string ): Observable<any> {

    /**
     * get data from local storage
     * const : string
     */
    const obj_token  = localStorage.getItem('obj_token_habib')  ;
    /**
     * author : habib bellia <bellib6@gmail.com>
     * convert string to js object to read
     * json parse string
     * this const contain : access_token ; token_type; expires_in; refresh_token; scope;
     */
    const obj_token_handeler: CllabackCode = JSON.parse(obj_token);
    /**
     * put the access token
     */
    const current_token =  obj_token_handeler.access_token ;
    /**
     * create new header
     */
    const headers = new HttpHeaders()
    /**
     * append auth rization to header
     */
      .append( 'Authorization' ,  `Bearer ${current_token }`  );
    /**
     * intitalize the url to get the code
     * from Spotify api
     */
    const url =  `https://api.spotify.com/v1/search?query=${value}+&type=artist,album&market=ES&offset=0&limit=20`  ;
    /**
     * return observable
     * result of search
     */
    return this._http.get( url, {headers}) ;
  }
  getToken() {
    /**
     * client id and securet code
     * from my application alredy created in spotify
     */
    const client_id = '?client_id=e240392cc858433b97c520f79a7ae97c';
    const redirect_uri =  encodeURIComponent(environment.root_url_callback);
    const scope =  'user-read-private user-read-email' ;
    const root_url = 'https://accounts.spotify.com/authorize/';
    /**
     * create url ;
     */
    const url = root_url + client_id + '&redirect_uri=' + redirect_uri + '&scope=' + scope + '&response_type=code&state=34fFs29kd09';
    /**
     * redirect to url && get information of code
     * in callback component
     */
    window.location.href = url;

  }
  get_string_token() {
    /**
     * body of post to get token
     */
    const body = {
      grant_type : 'authorization_code',
      code  : localStorage.getItem('code'),
      redirect_uri : environment.root_url_callback ,
    } ;

    /**
     * convert body params like : grant_type=authorization_code&code...
     * sirialize data
     */
    const queryString = Object.keys(body).map(key => key + '=' + body[key]).join('&');
   /**
    * Request post
    */
    /*this._http.post('https://accounts.spotify.com/api/token',   queryString   , {
      headers: new HttpHeaders()
      .set('Authorization',  'Basic ZTI0MDM5MmNjODU4NDMzYjk3YzUyMGY3OWE3YWU5N2M6YWZjODIwNzVhZTZhNDZlNzg1ZmM3YTQzMmQzYTA5Y2U=')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set( 'Accept', 'application/json')
    })*/
    this._http.get(environment.root_url_post + '/?code=' + body.code + '&uri=' + body.redirect_uri )
    .subscribe( (d: CllabackCode) => {
      /**
       * if responce successe
       * we put data in localstorage
       */
      if ( d.access_token.length > 0) {

        localStorage.removeItem('obj_token_habib');
        localStorage.setItem('obj_token_habib', JSON.stringify(d ) );
        /**
         * redirect to main page to start search
         */
        this.router.navigate(['/']);

      }else {

        if (confirm('Your session was expired .. Are you sur to renew th session')) {
          localStorage.removeItem('obj_token_habib');
          this.get_string_token();
        }
      }
    });
  }

}
