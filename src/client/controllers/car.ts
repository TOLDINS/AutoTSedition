
import { IEditingData } from "../../global/interfaces-global";
import { Client } from "../models/client";
import {Car, IEditCar} from '../models/car'
import { hashPassword } from "../../global/api/globalApi";
import { CheckRegisterNumber, AllCar } from "../api/car";
import { ICar } from "../models/car";


 
export const postAddCar= async (req:any,res:any)=>{
    console.log(req.body);

    const car:ICar={
        ...req.body
    }

    try {
        if( await CheckRegisterNumber(car.register_number)===false){
            let new_car=await new Car(car).save();
            await Client.findByIdAndUpdate({_id:car.id_client},{
                $push:{
                    "cars":new_car.id

                }
            })

            return res.status(201).json({
                status:true,
                car:new_car

            })


        }
        else return res.status(400).json({
            status:false,
            car:null
        })
            
        
    } catch (error) {
        console.log(error);
    }
    




    

}
export const postEditCar=async(req:any,res:any)=>{
    const parameter:string=req.params.parameter;
    const editData:IEditCar={
        parameter:parameter,
        id_car:req.body.id_car,
        value:req.body.value

    }

    try {
        switch(parameter){
            case "brand":
                let edit_car_brand=await Car.findByIdAndUpdate({_id:editData.id_car},{
                    $set:{
                        brand:editData.value
                    }
                },{new:true});
                return res.status(201).json({
                    status:true,
                    car:edit_car_brand
                });
            case "model":
                let edit_car_model=await Car.findByIdAndUpdate({_id:editData.id_car},{
                    $set:{
                        model:editData.value
                    }
                },{new:true})
                return res.status(201).json({
                    status:true,
                    car:edit_car_model
                })
            case "register_number":
                let edit_car_register_number=await Car.findByIdAndUpdate({_id:editData.id_car},{
                    $set:{
                        register_number:editData.value
                    }
                },{new:true})
                return res.status(201).json({
                    status:true,
                    car:edit_car_register_number
                })
            case "year":
                let edit_car_year=await Car.findByIdAndUpdate({_id:editData.id_car},{
                    $set:{
                        year:editData.value
                    }
                },{new:true})
               return res.status(201).json({
                    status:true,
                    car:edit_car_year
                });         
        }

        
    } catch (error) {
        console.info(error);
        
    }

    

}
export const postRemove=async(req:any,res:any):Promise<Object>=>{
    const id_car:string=req.body.id_car;


    try {
        let result:ICar= await Car.findByIdAndRemove({_id:id_car});
       let client= await Client.findById(result.id_client);
       let update_car_array=client.cars.filter(s=>s!==id_car);
       await Client.findByIdAndUpdate({ _id:client._id},{
           $set:{
               cars:update_car_array
           }
       })
    //    return result!==null?res.json({ status:true}):res.json({status:false});
         if(result!==null){
        return res.status(201).json({
            status:true,
            car:result
        })
    }
    else return res.status(400).json({
        status:false,
        car:null
    })
   
 
        
    } catch (error) {
        console.log(error)
        
    }





}
export const getAllCar=async (req:any,res:any):Promise<Array<ICar>>=>{
    console.log('in');
    const id:string=req.params.id;
    try {

    let cars:Array<ICar>= await AllCar(id);
     
      return res.status(201).json(cars);
        
    } catch (error) {
        console.log(error);
        
    }

}