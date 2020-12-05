import {Component} from '@angular/core';

@Component({
    selector:'app-search',
    templateUrl:'./Search.Component.html',
    styleUrls: ['./Search.Component.css']
})

export class SearchComponent{
    title: String = 'Plan Trip With Us';
    locations: any[] = [
        {
            "_id": 1,
            "city_name": "Delhi",
            "city": 1,
            "country_name": "India"
          },
          {
            "_id": 3,
            "city_name": "Pune",
            "city": 3,
            "country_name": "India"
          },
          {
            "_id": 2,
            "city_name": "Mumbai",
            "city": 2,
            "country_name": "India"
          },
          {
            "_id": 4,
            "city_name": "Chandigarh",
            "city": 4,
            "country_name": "India"
          },
          {
            "_id": 5,
            "city_name": "Goa",
            "city": 5,
            "country_name": "India"
          },
          {
            "_id": 6,
            "city_name": "Manali",
            "city": 6,
            "country_name": "India"
          },
          {
            "_id": 7,
            "city_name": "Indore",
            "city": 7,
            "country_name": "India"
          },
          {
            "_id": 8,
            "city_name": "Amsterdam",
            "city":8,
            "country_name": "Netherlands"
          }
    ]
}