import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './loginForm/login.component';
import { RegisterComponent } from './registerForm/register.component';
import { RegisterService } from './registerForm/register.service';
import { LoginService } from './loginForm/login.service';


@NgModule({

    declarations:[
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],

    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers:[
        RegisterService,
        LoginService
    ],
    bootstrap:[
        AppComponent
    ]
})


export class AppModule {}