import {Component} from '@angular/core';
import {IUser} from './userform.model';
import {NgForm} from '@angular/forms';
import {FormPosterService} from './userform.service';

@Component({
    selector:'app-forms',
    templateUrl:'./userform.component.html'
})

export class UserComponent{

    constructor(private formPosterService:FormPosterService) {}

    hasCodeLangError = false;
    languages=['Node','React','Angular','Go','Java']
    myUser = new IUser('John','','','','Node')

    firstToUpper(value):void{
        if(value.length>0){
            this.myUser.firstname=value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }else{
            this.myUser.firstname=value
        }
    }

    validateCodeLang(event):void{
        if(this.myUser.codelang === 'default'){
            this.hasCodeLangError= true
        }else{
            this.hasCodeLangError=false;
        }
    }

    submitForm(form:NgForm):void{
        console.log(form.value);
        this.formPosterService.employForm(form.value)
        .subscribe((res) => console.log('Data Posted'))
    }
}