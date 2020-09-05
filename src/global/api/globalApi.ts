import * as crypto from 'crypto';
import { Client } from '../../client/models/client';
import { BusinessClient } from '../../business/models/business-client';

export const hashPassword= function(password:string){
   return crypto.createHash('sha256').update(password).digest('base64');  
}
export const comparisonPassword=function(password:string,hashpassword:string){
   const incomin_pass:string=(password!==null)?hashPassword(password):null;
    return (incomin_pass===hashpassword)?true:false;
}
export const CheckEmailRegister=async function(email:string,type_user:number):Promise<boolean>{

   switch(type_user){

      case 0:
         let candidate_mail=await Client.findOne({
            email
          })
          return(candidate_mail!==null)?false:true;
      case 1:
         let business_mail=await BusinessClient.findOne({
            email
          })
          return(business_mail!==null)?false:true;    

   }


}