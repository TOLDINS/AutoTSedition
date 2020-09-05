import mongoose =require( 'mongoose');

import {Schema,Document} from 'mongoose';

export interface ICar extends mongoose.Document {
    
    id_client:string,
    brand:string,
    models:string,
    register_number:string,
    year:string
}
export interface IEditCar{
    parameter:string,
    id_car:string,
    value:string

}

const CarSchema:Schema=new Schema({   
    id_client:String,
    brand:String,
    models:String,
    register_number:{
        type:String,
        unique: true,
        },
    year:String
   
});
export const Car = mongoose.model<ICar>('car',CarSchema);


   

