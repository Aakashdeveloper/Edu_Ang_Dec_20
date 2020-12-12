import {IRoom} from './room.model';

export interface IHotel{
    _id: string,
    name: string,
    city_name: string,
    city: string,
    locality: string,
    thumb: string,
    cost: number,
    address: string,
    roomtype: IRoom,
    roomname: string,
    tripType: number,
    tripname: string
}
