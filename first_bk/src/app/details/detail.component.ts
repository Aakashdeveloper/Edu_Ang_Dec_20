import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {DetailService} from '../services/details.service'

@Component({
    templateUrl:'./detail.component.html'
})

export class HotelDetails implements OnInit{
    tripid = sessionStorage.getItem('tripid');
    id;
    details:any[];

    constructor(
                private route: ActivatedRoute,
                private router:Router,
                private detailService:DetailService){}

    ngOnInit():void{
        this.id = this.route.snapshot.params['id'];
        this.detailService.getDetails(this.id)
        .subscribe((data) => this.details = data)
    }

    onBack():void{
        this.router.navigate(['/listing',this.tripid])
    }
}