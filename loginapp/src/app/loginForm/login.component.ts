import {Component} from '@angular/core';
import {ILogin} from './login.model';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-forms',
    templateUrl:'./login.component.html'
})

export class LoginComponent{

    constructor(private loginService:LoginService,
                private router:Router) {}

    myUser = new ILogin('','')

    submitForm(form:NgForm):void{
        console.log(form.value);
        this.loginService.loginUser(form.value)
        .subscribe((res) => this.loginService.getUserInfo(res['token'])
        .subscribe((response) => this.userRole(response["role"]))
         )
    }

    userRole(typeOfUser):void{
        sessionStorage.setItem('Role_Type',typeOfUser);
        console.log("now to profile page")
        console.log('Role_Type',typeOfUser)
        this.router.navigate(['/profile'])
    }
}