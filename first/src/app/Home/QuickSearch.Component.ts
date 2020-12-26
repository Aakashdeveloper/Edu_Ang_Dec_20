import {Component,OnInit} from '@angular/core';
import { HomeService } from '../services/home.service';
import {ITrip} from './trip.model';

@Component({
    selector:'app-quicksearch',
    templateUrl:'./QuickSearch.Component.html',
    styleUrls: ['./QuickSearch.Component.css']
})

export class QuickSearchComponent implements OnInit{
    title: String = 'Plan Trip With Us';
    hotelType: ITrip[]

    constructor(private homeService:HomeService){}

    ngOnInit(): void{
      this.homeService.getTrip()
      .subscribe((data) => this.hotelType = data)
    }
}