import {Component,OnInit} from '@angular/core';
import { ICity } from './location.model';
import {HomeService} from '../services/home.service';

@Component({
    selector:'app-search',
    templateUrl:'./Search.Component.html',
    styleUrls: ['./Search.Component.css']
})

export class SearchComponent implements OnInit{
    title: String = 'Plan Trip With Us';
    locations: ICity[];

    constructor(private homeService:HomeService){}

    ngOnInit(): void{
      this.homeService.getCity()
      .subscribe((data) => this.locations = data)
    }

}