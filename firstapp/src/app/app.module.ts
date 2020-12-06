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
import {FormsModule} from '@angular/forms';

// Decorator (meta data)
@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path:'listing/:id',component:ListingComponent},
            {path:'home',component:HomeComponent},
            {path:'',component:HomeComponent}
        ]),
        FormsModule
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
        ListingComponent
        
    ],

    // All Services will declare here
    providers:[],

    // Only and one first/main Component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {

}