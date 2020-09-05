import mongoose, { mongo } from 'mongoose';
import {Schema} from 'mongoose';
import { IUser,User } from '../../global/models/base-user';


export interface IBusiness extends IUser{
    services_id:Array<string>
}

User.discriminator('business-client',new Schema({
    services_id:{
        type:Array,
        default:null
    }

}));

export const BusinessClient =mongoose.model<IBusiness>('business-client')
