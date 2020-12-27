import { Component, OnInit, ViewChild } from '@angular/core';
import {CounterChildComponent} from '../view-child/view-child.component'

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class CounterParentComponent implements OnInit {
  @ViewChild(CounterChildComponent) counterChild:CounterChildComponent;
  constructor() { }

  items:any[] = [{name:'One', val:1},{name:'Two', val:2},{name:'Three', val:3}];
  selectedValue:String= "One"

  ngOnInit(): void {
  }

  increase(){
    this.counterChild.incrementByOne();
  }

  decrease(){
    this.counterChild.decrementByOne();
  }
}


