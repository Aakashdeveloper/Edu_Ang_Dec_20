import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()

export class AdminGaurdService implements CanActivate {
    token;
    role

    constructor(private router:Router) {}

    canActivate(): boolean {
        this.token = sessionStorage.getItem('TOKEN_NUMBER');
        this.role = sessionStorage.getItem('Role_Type');
        if(this.token == null){
            this.router.navigate(['/login']);
            return false;
        } else if (this.token !== null && this.role=="User"){
            this.router.navigate(['/profile']);
            return false;
        }else if (this.token !== null && this.role=="Admin"){
            return true;
        }

        return false;
    }
}