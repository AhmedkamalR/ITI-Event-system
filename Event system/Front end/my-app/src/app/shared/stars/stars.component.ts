import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit ,OnChanges {

  @Input() rating =4;
  cropWidth=75;
  //first step DeclearEvent
  @Output() ratingClicked:EventEmitter<number>=new EventEmitter<number>();

  onClick(){
    //fire Event //step2
    this.ratingClicked.emit(this.rating);
  }
  constructor() { }

  ngOnChanges(): void{
    this.cropWidth=this.rating*(75/5);
  }

  ngOnInit(): void {
  }

}
