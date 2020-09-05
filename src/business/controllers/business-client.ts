import {BusinessClient, IBusiness} from '../models/business-client';
import { ISignUpData, ISignData } from '../../global/interfaces-global';
import { CheckEmailRegister, hashPassword, comparisonPassword } from '../../global/api/globalApi';
export const postSignUp=async(req:any,res:any):Promise<IBusiness>=>{
    const type:string=req.params.type;
    const SignUpData:ISignUpData={
        ...req.body
    }

    try {
        if(await CheckEmailRegister(SignUpData.email,1)===true){
            let user:IBusiness= await new BusinessClient({
                surname:SignUpData.surname,
                name:SignUpData.name,
                phone:SignUpData.phone,
                email:SignUpData.email,
                email_is_verified:
                    (type==='google'||type==='facebook')?true:false,
                lang_settings:SignUpData.lang_settings!==undefined?SignUpData.lang_settings:'ru',
                password:hashPassword(SignUpData.password),
                token:SignUpData.token,
                token_type:(type!=='google'&& type!=='facebook')?null:type,
            
            }).save();
            return res.status(200).json(user);


        }
        else return res.status(400).json({
            status:true,
            user:null
        })
        
    } catch (error) {
        console.log(error);
        
    }


    

}

export const postSignIn=async(req:any,res:any):Promise<IBusiness>=>{
    const type_login:string=req.params.type;
    const SignInData:ISignData={
        ...req.body
    } 
    switch(type_login){
    case"google":
    case "facebook":
       let business_client:IBusiness = await BusinessClient.findOne().where({
        token:SignInData.token,
        token_type:type_login
       })
      if( business_client !== null){
          return res.status(200).json({
            status: true,
            user: business_client,
          })
      }
      else return res.status(400).json({
          status:false,
          user:null
      })
       
    case "custom":
      let business_client2:IBusiness = await BusinessClient.findOne({
        phone:SignInData.phone
      });
      if (business_client2 !== null) {
        let status = comparisonPassword(SignInData.password, business_client2.password);
        if(status){
            return res.json(200).json({status:true,user:business_client2});
        } else return res.json(400).json({status:false,user:null})
      
      } else return res.status(400).json({
          status:false,
          user:null
      });


    }



}
export const postEdit=async (req:any,res:any)=>{
    

}