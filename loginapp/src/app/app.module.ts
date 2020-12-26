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
import { HeaderComponent } from './Header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminService } from './Admin/Admin.service';
import { AdminPage } from './Admin/Admin.component';
import { LoginGaurdService } from './login-gaurd.service';


@NgModule({

    declarations:[
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        ProfileComponent,
        AdminPage
    ],

    imports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers:[
        RegisterService,
        LoginService,
        AdminService,
        LoginGaurdService,
        LoginGaurdService
    ],
    bootstrap:[
        AppComponent
    ]
})


export class AppModule {}