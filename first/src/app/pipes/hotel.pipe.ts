import {Pipe,PipeTransform} from '@angular/core';
import {IHotel} from '../listing/hotel.model';

@Pipe({
    name:'hotelSearch',
    pure:true
})

export class HotelSearchPipe implements PipeTransform{
    transform(value: IHotel[], userInput:string,roomuser:string){
        if(userInput){
            //convert all user input in lowercase
            userInput = userInput ? userInput.toLowerCase(): null;
            //return vlaue according to userinput
            return userInput ? value.filter((data) => 
                ((data.name.toLowerCase().indexOf(userInput) !==-1) || 
                (data.city_name.toLowerCase().indexOf(userInput) !==-1))
            ):value;
        }else if(roomuser){
            console.log(">>>>",roomuser);
            return roomuser ? value.filter((data) => 
            (data.roomtype.toString() == roomuser.toString())):value
        }else{
            return value
        }
        
    }
}

