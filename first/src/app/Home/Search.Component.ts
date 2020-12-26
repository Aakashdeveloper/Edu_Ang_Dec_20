import {Component,OnInit} from '@angular/core';
import { ICity } from './location.model';
import {HomeService} from '../services/home.service';
import {IHotel} from '../listing/hotel.model';
import {Router} from '@angular/router';

@Component({
    selector:'app-search',
    templateUrl:'./Search.Component.html',
    styleUrls: ['./Search.Component.css']
})

export class SearchComponent implements OnInit{
    title: String = 'Plan Trip With Us';
    locations: ICity[];
    hotels: IHotel[];

    constructor(private homeService:HomeService,
                private router:Router){}

    ngOnInit(): void{
      this.homeService.getCity()
      .subscribe((data) => this.locations = data)
    }

    citySelect(cityId){
      console.log(cityId)
      this.homeService.getHwrtc(cityId)
      .subscribe((data) => this.hotels= data)
    }

    hotelSelect(hotelid){
      this.router.navigate(['/details',hotelid])
    }

}