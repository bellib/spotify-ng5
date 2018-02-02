import { Component, OnInit , OnChanges , ElementRef, ViewChild , AfterViewInit} from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Result } from '../modeles/result' ;

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {

  searchTerm$ = new Subject<string>();
  results: Object;
  dataResultSubscribtion: Subscription;
  dataResult ;
  inputText = '' ;
  clikedItem = [] ;
  @ViewChild('ielementRefd') ielementRefd: ElementRef;

  constructor(private _spService: SpotifyService) { }

  sMoteScrool() {

    const elm = this.ielementRefd.nativeElement.offsetTop ;
    return Observable.interval(50)
    .map(v => v * 100)
    .do( position => window.scrollTo(0, position)  /*window.scrollTo(0, position)*/ )
    .takeWhile(val => val < elm - 100);
  }
  ngOnInit() {

    /**
     * subscrib to input data
     * put our input to services
     */
    this.putData().subscribe( inputSearch => {
      /**
       * if user input null data of 2 length
       * we not allowed to send request ;
       */
      if (inputSearch.trim() === '' || inputSearch.trim().length <= 2 ) {
        this.dataResult = [];
      }else {
        /**
         * befor emmit any data
         * we need to check if we have permmition to
         * access to spotify api
         */
        if ( ! localStorage.getItem('obj_token_habib') ) {
          return this._spService.getToken();
        }
        /**
         * subscribe to get data query
         */
        this.dataResultSubscribtion = this._spService.getData( inputSearch.toString() )
        .subscribe( (data: Result ) => {

          this.dataResult = data.albums.items.concat(data.artists.items) ;

          // strart smoith animation scrol by habib bellia
          setTimeout(() => {
            this.sMoteScrool().subscribe() ;
          }, 100);

        }, ( er) => {

           localStorage.removeItem('obj_token_habib');
           this._spService.getToken();

        });
      }


    } );
  }
  /**
   * this function handel data from input
   * @param valInput : string or number
   * subscrib to the subject and emmit data every key up
   * by this.searchTerm$
   */
  onInput( valInput: any ) {
    this.inputText = valInput ;
    this.dataResult = null ;
    this.searchTerm$.next(valInput);
  }
  /**
   * return observebale an emit data every 2 second
   */
  putData() {

      return this.searchTerm$.debounceTime(2000)
                             .distinctUntilChanged();

  }
  initdata(data) {
    const arrData = [];
    const obj = {
      title : '' ,
      image : '',
      album_type : ''
    };
    data.forEach(element => {
      obj.title = element.name ;
      obj.image = element.images[0].url ;
      obj.album_type = element.album_type ;
      arrData.push(obj);
    });
    return arrData;
  }



}
