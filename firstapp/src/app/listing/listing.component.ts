import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl:'./listing.component.html',
    styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit{
    id: number;
    userInput;
    hotels: any[] = [
        {
          "_id": "14",
          "name": "Hometel Chandigarh",
          "city_name": "Chandigarh",
          "city": "4",
          "locality": "Industrial Area, Chandigarh",
          "thumb": "https://i.ibb.co/dP3TZg3/hometel.jpg",
          "cost": 2419,
          "address": "Plot No.147-148, Industrial Area Phase I, Near ELANTE MALL, Chandigarh",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "18",
          "name": "DoubleTree by Hilton",
          "city_name": "Goa",
          "city": "5",
          "locality": "Tiswadi, Goa",
          "thumb": "https://i.ibb.co/WpwC6m5/hilton.jpg",
          "cost": 2419,
          "address": "Kadamba Plateau, Panjim Old Goa Bypass Road, Velha Goa, Panaji,Tiswadi Goa",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "23",
          "name": "Vivaan - The Sun Rise",
          "city_name": "Manali",
          "city": "6",
          "locality": "Rangri Manali",
          "thumb": "https://i.ibb.co/QM5N7nz/vivaan.jpg",
          "cost": 3134,
          "address": "Vivaan the Sunrise Resort, Kanyal-Simsa Road, Rangri, Manali",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "10",
          "name": "Amanora The Fern Hotels",
          "city_name": "Pune",
          "city": "3",
          "locality": "Magarpatta, Pune",
          "thumb": "https://i.ibb.co/y0mPTXx/amanora.jpg",
          "cost": 3455,
          "address": "177/1/A,Sadesatara Nali,Amanora Park Town, Magarpatta Road, Hadapsar.pune",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "15",
          "name": "Ramada Plaza",
          "city_name": "Chandigarh",
          "city": "4",
          "locality": "Zirakpur, Chandigarh",
          "thumb": "https://i.ibb.co/j8Wc9Dt/ramada.jpg",
          "cost": 3455,
          "address": "NH 21 , Chandigarh Delhi National Highway, Zirakpur",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "19",
          "name": "Westwood Residence",
          "city_name": "Goa",
          "city": "5",
          "locality": "Porvorim, Bardez Goa",
          "thumb": "https://i.ibb.co/7t4nXcL/westwood.jpg",
          "cost": 3455,
          "address": "264/80 Alto-Savlo,Porvorim, Bardez Goa",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "9",
          "name": "Hotel Sayaji",
          "city_name": "Pune",
          "city": "3",
          "locality": "Wakad, Pune",
          "thumb": "https://i.ibb.co/6FLGh3D/Syaji.jpg",
          "cost": 3479,
          "address": "135/136, Mumbai-Bangalore Bypass Highway, Wakad, Pune",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "2",
          "name": "Pride Plaza Hotel ",
          "city_name": "New Delhi",
          "city": "1",
          "locality": "Aerocity, New Delhi",
          "thumb": "https://i.ibb.co/5nKNcz1/pride.jpg",
          "cost": 4000,
          "address": "Asset 5-A, Hospitality District, Aerocity, IGI Airport , New Delhi",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "8",
          "name": "Trident Nariman Point",
          "city_name": "Mumbai",
          "city": "2",
          "locality": "Nariman Point, Mumbai",
          "thumb": "https://i.ibb.co/p3Dhc3q/trident.jpg",
          "cost": 4000,
          "address": "CR 2 Nariman Point, Netaji Subhash Chandra Bose Road",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "22",
          "name": "The Anantmaya Resort",
          "city_name": "Manali",
          "city": "6",
          "locality": "Naggar, Manali",
          "thumb": "https://i.ibb.co/6Xy8c2n/anantmaya.jpg",
          "cost": 4126,
          "address": "Naggar road, shuru, P.o. Prini Teh, Manali, Distt kullu",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "1",
          "name": "Roseate House",
          "city_name": "New Delhi",
          "city": "1",
          "locality": "Aerocity, New Delhi",
          "thumb": "https://i.ibb.co/pv8Kf4m/roseate.jpg",
          "cost": 8399,
          "address": "Plot No 10, GMR Hospitality District, Indira Gandhi International Airport, Aerocity",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "7",
          "name": "ITC Maratha",
          "city_name": "Mumbai",
          "city": "2",
          "locality": "Andheri, Mumbai",
          "thumb": "https://i.ibb.co/55nZq20/itcmaratha.jpg",
          "cost": 8399,
          "address": "Sahar, Andheri (E) Mumbai Maharashtra",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        }
      ]

    constructor(
        private route: ActivatedRoute
    ){
        //console.log('>>>>>>> Constructor <<<<<<<<')
    }

    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
        console.log('>>>>>>> ngOnInit <<<<<<<<')
    }

}