import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyTextPipe} from './myUpper.pipe';

@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[
        MyTextPipe
    ],
    providers:[],
    exports:[
        CommonModule,
        FormsModule,
        MyTextPipe
    ]
})

export class SharedModule {
    
}