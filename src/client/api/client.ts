import {Client} from '../models/client';
export const getClientID=async function(phone:string):Promise<object>{

    return await Client.findOne({phone});
 
 }
export  const CheckClientmailForRegister=async function(email:string):Promise<boolean>{
     let candidate_mail=await Client.findOne({
       email
     })
     return(candidate_mail!==null)?false:true;
 }