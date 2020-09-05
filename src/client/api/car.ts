import {Car, ICar} from '../models/car';



export const CheckRegisterNumber=async (register_number:string):Promise<boolean>=>{
    let result=await Car.findOne({register_number});

    
    return(result===null)?false:true;
}

export const AllCar=async (id_client:string):Promise<Array<ICar>>=>{
        const allcars:Array<ICar>=await Car.find().where({
            id_client 
        })
    
        return allcars;

}