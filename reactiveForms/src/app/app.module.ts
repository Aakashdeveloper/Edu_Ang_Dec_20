import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UserComponent} from './userform/userform.component';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({

    declarations:[
        AppComponent,
        UserComponent
    ],

    imports:[
        BrowserModule,
        ReactiveFormsModule
    ],
    providers:[

    ],
    bootstrap:[
        AppComponent
    ]
})


export class AppModule {}