import {Injectable} from '@angular/core';
import {IHotel} from '../listing/hotel.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class ListingService {
    private hotelUrl = "https://developerfunnel.herokuapp.com/hoteltrip";

    constructor(private http:HttpClient){}

    getHotelPerTrip(id):Observable<IHotel[]>{
        return this.http.get<IHotel[]>(`${this.hotelUrl}/${id}`)
    }
}