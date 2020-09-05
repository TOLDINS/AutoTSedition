import mongoose =require( 'mongoose');
import  { IUser ,User} from '../../global/models/base-user';
import {Schema,Document} from 'mongoose';

export interface IClient  extends IUser{
    photo:string,
    cars:Array<string>,
    favorites:Array<string>
}

const client = User.discriminator(
    "client",
    new Schema({
      photo:{
        type:String,
        default:null
      },
      
      cars: Array,
      favorites: {
        type:Array,
        default:[]
      },
    })
  );
  
  export const Client = mongoose.model<IClient>('client');
