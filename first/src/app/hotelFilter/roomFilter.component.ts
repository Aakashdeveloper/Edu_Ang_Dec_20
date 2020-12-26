import {Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-roomfilter',
    templateUrl: './roomFilter.component.html'
})

export class RoomFilterComponent{
    @Input() filterName: string;
    roomtype;

    @Output() roomClicked: EventEmitter<string> = new EventEmitter<string>();

    onSelectRoom(): void{
        this.roomClicked.emit(this.roomtype)
    }
}


/*
parent > child  @Input
child > parent @Output EventEmitter
*/