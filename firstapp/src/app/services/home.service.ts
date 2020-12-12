import {Injectable} from '@angular/core';
import {ICity} from '../Home/location.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrip} from '../Home/trip.model'

@Injectable()

export class HomeService {
    private cityUrl="https://developerfunnel.herokuapp.com/location";
    private tripUrl="https://developerfunnel.herokuapp.com/booking"

    constructor(private http: HttpClient) {}

    getCity(): Observable<ICity[]>{
        return this.http.get<ICity[]>(this.cityUrl);
    }

    getTrip(): Observable<ITrip[]>{
        return this.http.get<ITrip[]>(this.tripUrl);
    }
}

