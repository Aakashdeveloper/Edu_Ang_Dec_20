import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HotelDetails } from './details/detail.component';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
    {path:'listing/:id',component:ListingComponent},
    {path:'details/:id',component:HotelDetails},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule {}