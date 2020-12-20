import {Component} from '@angular/core';
import {IRegister} from './register.model';
import {NgForm} from '@angular/forms';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';

@Component({
    selector:'app-forms',
    templateUrl:'./registerform.component.html'
})

export class RegisterComponent{

    constructor(private registerService:RegisterService,
                private router: Router) {}
                
    myUser = new IRegister('','','')

    submitForm(form:NgForm):void{
        this.registerService.RegisterUser(form.value)
        .subscribe((res) => this.router.navigate(['/login']))
    }
}