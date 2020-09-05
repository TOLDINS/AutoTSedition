import mongoose, { mongo } from 'mongoose';
import {Double} from '@mongoosejs/double';
import {Schema,Document} from 'mongoose';



enum ServiceType{
    service_station='service_station',
    tuning_atelier='tuning_atelier',
    washing='washing',   
    tire_fitting='tire_fitting'



}

interface IWorkScheduler {
    open:Array<string>,
    close:Array<string>
}

export interface IService extends Document{
    id_business_client:string,
    verifed_service:boolean,
    name_service:string,
    type_service:ServiceType,
    address:string,
    coordinates:{
        x:string,
        y:string
    },
    parther_status:boolean,
    trial_period:boolean,
    work_schedule:IWorkScheduler

} 
 
 const serviceSchema=new Schema({
    id_business_client:String,
    verifed_service:{
        type:String,
        default:false
    },
    name_service:String,
    type_service:String,//CTO,ТюнингАтельє,Мойка,Шиномонтаж,Евакуатор.
    address:String,
    coordinates:{
        latitude:String,
        longitude:String,
    },
    parther_status:{
        type:Boolean,
        default:false
    },
    trial_period:{
        type:Boolean,
        default:false
    },
    work_schedule:{
        type:Object,
        default:null
    }


})

export const Service = mongoose.model<IService>('service',serviceSchema)