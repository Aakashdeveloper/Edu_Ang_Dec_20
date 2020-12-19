import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UserComponent} from './userform/userform.component';
import {FormsModule} from '@angular/forms';
import { FormPosterService } from './userform/userform.service';
import { HttpClientModule} from '@angular/common/http';



@NgModule({

    declarations:[
        AppComponent,
        UserComponent
    ],

    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers:[
        FormPosterService
    ],
    bootstrap:[
        AppComponent
    ]
})


export class AppModule {}