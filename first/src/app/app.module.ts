// This import is main import for modules
import {NgModule} from '@angular/core';
// To Display content on the browser
import {BrowserModule} from '@angular/platform-browser';
//Main Component
import {AppComponent} from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { ListingComponent } from './listing/listing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListingService } from './services/listing.service';
import { HotelSearchPipe } from './pipes/hotel.pipe';
import { RoomFilterComponent } from './hotelFilter/roomFilter.component';
import { HotelDetails } from './details/detail.component';
import { DetailService } from './services/details.service';
import { HomeModule } from './Home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CounterParentComponent } from './view-parent/view-parent.component';
import { CounterChildComponent } from './view-child/view-child.component';


// Decorator (meta data)
@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HomeModule,
        AppRoutingModule
    ],

    // All Component and pipe
    declarations:[
        AppComponent,
        FooterComponent,
        HeaderComponent,
        ListingComponent,
        HotelSearchPipe,
        RoomFilterComponent,
        HotelDetails,
        CounterParentComponent,
        CounterChildComponent
    ],

    // All Services will declare here
    providers:[
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