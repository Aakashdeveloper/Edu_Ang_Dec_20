import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHotel} from '../listing/hotel.model'

@Injectable()

export class DetailService {
    private detailsUrl="https://developerfunnel.herokuapp.com/hotelsdetails";

    constructor(private http: HttpClient) {}

    getDetails(id): Observable<IHotel[]>{
        return this.http.get<IHotel[]>(`${this.detailsUrl}/${id}`);
    }
}

