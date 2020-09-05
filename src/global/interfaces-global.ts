export interface ISignData{
    phone:string | undefined,
    password:string | undefined,
    token:string
}
export interface ISignUpData{
    name:string,
    surname:string,
    email:string,
    photo:string |undefined,
    phone:string,
    password:string,
    token:string | undefined,
    lang_settings:string| undefined
}

export interface IEditingData{
    id_client:string,
    value:string

}





