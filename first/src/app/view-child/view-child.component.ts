import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class CounterChildComponent implements OnInit {
  message:string='';
  count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementByOne(){
    this.count= this.count+1;
    this.message = "count "+this.count
  }

  decrementByOne(){
    this.count= this.count-1;
    this.message = "count "+this.count
  }

}
