import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IHotel} from './hotel.model';
import {ListingService} from '../services/listing.service'

@Component({
    templateUrl:'./listing.component.html',
    styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit{
    id: number;
    userInput;
    hotels: IHotel[];
    roomtype;

    constructor(
        private route: ActivatedRoute,
        private listingService:ListingService
    ){
        //console.log('>>>>>>> Constructor <<<<<<<<')
    }

    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
        sessionStorage.setItem('tripid',this.route.snapshot.params['id'])
        console.log('>>>>>>> ngOnInit <<<<<<<<')
        this.listingService.getHotelPerTrip(this.id)
        .subscribe((data) => this.hotels=data)
    }

    dataRecive(roomId: string){
        this.roomtype  = roomId
        //we can call api on the basis of this.id i.e tripid and roomId which is
        //category of room
    }

}