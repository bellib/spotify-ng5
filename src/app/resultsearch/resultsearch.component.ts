import { Component, OnInit , Input , HostListener } from '@angular/core';
import { Result } from '../modeles/result';

@Component({
  selector: 'app-resultsearch',
  templateUrl: './resultsearch.component.html',
  styleUrls: ['./resultsearch.component.css'],

})
export class ResultsearchComponent implements OnInit   {

  @Input() dataResult: any ;
  clikedItem: any ;
  clikedBox = false ;
  screenHeight: number ;
  screenWidth: number ;

  constructor() { }
  ngOnInit() {
    /**
     * if users no resize ;
     */
    this.screenHeight = window.innerHeight ;
    this.screenWidth = window.innerWidth ;
  }
  /*
   * Detect height every resize or change
   * by host listner ;
  */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenHeight = window.innerHeight ;
    this.screenWidth = window.innerWidth ;
  }
  displat(item) {
   this.clikedItem = item;
   this.clikedBox = true ;

  }
  hideBox() {
   this.clikedBox = false ;
   this.clikedItem = '';
   console.clear();
  }
  showMeMor() {

  }



}
