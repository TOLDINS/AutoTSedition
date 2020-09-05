import {Client, IClient} from '../models/client';
import {getClientID,CheckClientmailForRegister} from '../api/client';
import {hashPassword} from '../../global/api/globalApi'
import {ISignData,ISignUpData, IEditingData} from '../../global/interfaces-global';
export const postSignIn=async (req: any,res:any)=>{
    console.log('in');

    const sign_data:ISignData={
        ...req.body
    }
    console.log(sign_data);
    console.log(req.params.type);
    let user:IClient=null;
    try {
        switch(req.params.type){
            case "google":
            case "facebook":
                user=await Client.findOne({
                    token:sign_data.token,
                    token_type:req.params.type
                })
            break;
            case "custom":
                const findByFone:IClient = await Client.findOne({
                    phone:sign_data.phone
                })
                if(findByFone){
                    user =await Client.findOne(
                        {
                            phone:sign_data.phone

                        }
                    )
                    if(!user) return res.status(200).json({
                        status:false,
                        user:null
                    });
                                
                }    
             break;   
           

        }
        if (user) {
            return res.status(200).json({ status: true, user });
          } else {
            return res.status(200).json({ status: false, user: null });
        }

        
    } catch (error) {
        console.log(error);        
    }
    





}

export const postSignUp=async (req:any,res:any)=>{
    try {
        const sign_up_data:ISignUpData={
            ...req.body
    
        };
        let check_email:boolean=await CheckClientmailForRegister(sign_up_data.email);
        const type_sign_up:string=req.params.type;
        if(check_email!==false){
            let user:IClient=await new Client({
                surname:sign_up_data.surname,
                name:sign_up_data.name,
                photo:sign_up_data.photo,
                phone:sign_up_data.phone,
                email:sign_up_data.email,
                email_is_verified:
                    (type_sign_up==='google'||type_sign_up=='facebook')?true:false,
                lang_settings:
                    (sign_up_data.lang_settings!==undefined)?sign_up_data.lang_settings:'ru',
                password:hashPassword(sign_up_data.password),
                token:sign_up_data.token,
                token_type:type_sign_up


            }).save();
            return res.status(200).json({
                status:true,
                user
            })
        }
        else {
            return res.json({
                status:false,
                user:null
            });
        }


    } catch (error) {
        console.log(error);
    } 

}
export const postEditClient=async(req:any,res:any)=>{
    console.log('in');
    let parameter:string=req.params.parameter;
    let edit_data:IEditingData={
        ...req.body
    }
    try {
        switch(parameter){
            case "phone":
            let editing_phone:IClient=await Client.findByIdAndUpdate({_id:edit_data.id_client},{
                $set:{
                    phone:edit_data.value
    
                },
            },{new:true});
            return res.json({
                status:true,
                user: editing_phone
            });
            case "surname":
            let editing_surname=await Client.findByIdAndUpdate({_id:edit_data.id_client},{
                $set:{
                    surname:edit_data.value
                },
            },{new:true});
            return res.json({
                status:true,
                user:editing_surname
            });
            case "name":
            let editing_name=await Client.findByIdAndUpdate({_id:edit_data.id_client},{
                $set:{
                    name:edit_data.value
    
                },
            },{new:true});
            return res.json({
                status:true,
                user:editing_name
            })
        case "email":
            let editing_email=await Client.findByIdAndUpdate({_id:edit_data.id_client},{
                $set:{
                    email:edit_data.value
    
                }
            },{new:true});
            return res.json({
                status:true,
                user:editing_email
            });
        case "password":
            let editing_password=await Client.findByIdAndUpdate({_id:edit_data.id_client},{
                $set:{
                    password:hashPassword(edit_data.value)
    
                }    
            },{new:true});
            return res.json({
                status:true,
                user:editing_password
            });               
        }

        
    } catch (error) {
        console.log(error);
        
    }


}
