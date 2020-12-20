// This import is main import for modules
import {NgModule} from '@angular/core';
// To Display content on the brower
import {BrowserModule} from '@angular/platform-browser';
//Main Component
import {AppComponent} from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { QuickSearchComponent } from './Home/QuickSearch.Component';
import { SearchComponent } from './Home/Search.Component';
import { ListingComponent } from './listing/listing.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { MyTextPipe } from './pipes/myUpper.pipe';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './services/home.service';
import { ListingService } from './services/listing.service';
import { HotelSearchPipe } from './pipes/hotel.pipe';
import { RoomFilterComponent } from './hotelFilter/roomFilter.component';
import { HotelDetails } from './details/detail.component';
import { DetailService } from './services/details.service';

// Decorator (meta data)
@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path:'listing/:id',component:ListingComponent},
            {path:'details/:id',component:HotelDetails},
            {path:'home',component:HomeComponent},
            {path:'',component:HomeComponent},
            {path:'*',component:HomeComponent}
        ]),
        FormsModule,
        HttpClientModule
    ],

    // All Component and pipe
    declarations:[
        MyTextPipe,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
        DiscountPipe,
        ListingComponent,
        HotelSearchPipe,
        RoomFilterComponent,
        HotelDetails
    ],

    // All Services will declare here
    providers:[
        HomeService,
        ListingService,
        DetailService
    ],

    // Only and one first/main Component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {

}