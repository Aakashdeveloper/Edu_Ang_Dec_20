import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { QuickSearchComponent } from './QuickSearch.Component';
import { DiscountPipe } from '../pipes/discount.pipe';
import { SearchComponent } from './Search.Component';
import { HomeService } from '../services/home.service';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChangeColorDirective } from './color.directive';

@NgModule({
    imports: [
        HttpClientModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations:[
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
        DiscountPipe,
        ChangeColorDirective
    ],
    providers:[
        HomeService
    ]
})

export class HomeModule {

}