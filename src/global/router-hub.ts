import { Application } from "express";
import   client_routers_auth from '../client/routes/client';
import client_routers_edit from '../client/routes/car';




export =(app:Application)=>{
    app.use('/client',client_routers_auth,client_routers_edit);
    // app.use('/business-client',[]);
    // app.use('/feedback',[]);
    // app.use('/order',[]);    
}


