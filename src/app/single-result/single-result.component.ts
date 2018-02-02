import { Component, OnInit , Input , HostListener ,  Output, EventEmitter , HostBinding } from '@angular/core';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {

  @Input() clikedItem ;
  @Output() isClosed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }
  hideBox() {
   this.isClosed.emit(false) ;

  }


}
