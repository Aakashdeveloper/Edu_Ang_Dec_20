import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../loginForm/login.service';

@Component({
    templateUrl:'./profile.component.html'
})

export class ProfileComponent implements OnInit {
    token;
    userinfo;

    constructor(private loginService:LoginService,
                private router:Router){

    }

    ngOnInit(){
        this.token = sessionStorage.getItem('TOKEN_NUMBER');
        this.loginService.getUserInfo(this.token)
            .subscribe((res) => this.userinfo=res);

    }

    logout():void{
        sessionStorage.removeItem('TOKEN_NUMBER');
        sessionStorage.removeItem('Role_Type');
        this.router.navigate(['login'])
    }
}