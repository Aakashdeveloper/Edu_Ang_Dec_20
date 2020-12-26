import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './registerForm/register.component';
import {LoginComponent} from './loginForm/login.component';
import {ProfileComponent} from './profile/profile.component'
import { AdminPage } from './Admin/Admin.component';
import { LoginGaurdService } from './login-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';

const routes: Routes = [
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "profile", component: ProfileComponent, canActivate:[LoginGaurdService]},
    {path: "admin", component: AdminPage, canActivate:[AdminGaurdService]},
    {path:'', redirectTo:'register', pathMatch:'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [
        LoginGaurdService,
        AdminGaurdService
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

/*
  employeeObj:EmpModel = [{}];

  constructor(){
    
  } 
  ngOnInit(): void {
   this.employeeObj.empId = "P00016";
   this.employeeObj.firstName = "Kadapa Kishore";
   this.employeeObj.lastName = "Kumar Reddy";
   this.employeeObj.dept  = "RNDD";
   this.employeeObj.city ="Hyderabad";
   this.employeeObj.email = "kishore486@gmail.com";
  }
  */