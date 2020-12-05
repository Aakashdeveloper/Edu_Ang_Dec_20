import {Component} from '@angular/core';

@Component({
    selector:'app-homepage',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent {
    title: String = 'Home Page';
    description: String = 'This is angular app data binding';
    imagePath: String = 'https://i.ibb.co/pv8Kf4m/roseate.jpg';
    myText:String= 'Text Before click';
    condition: Boolean = true;

    toggleText(): void{
        this.condition = !this.condition
    }
}
