// This import is main import for modules
import {NgModule} from '@angular/core';
// To Display content on the brower
import {BrowserModule} from '@angular/platform-browser';
//Main Component
import {AppComponent} from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './Header/header.component';

// Decorator (meta data)
@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule
    ],

    // All Component and pipe
    declarations:[
        AppComponent,
        FooterComponent,
        HeaderComponent
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