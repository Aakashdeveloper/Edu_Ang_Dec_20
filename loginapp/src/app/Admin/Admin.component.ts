import {Component, OnInit} from '@angular/core';
import {AdminService} from './Admin.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'./Admin.component.html'
})

export class AdminPage implements OnInit{
    allUser;

    constructor(private adminService:AdminService,
                private router:Router) {
            
                }
    
    ngOnInit(){
        this.adminService.allUser()
        .subscribe((res) => this.allUser = res);
    }
}