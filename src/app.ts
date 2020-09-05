import express from 'express';
import {Application} from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan'
import auth_routes_client from './client/routes/client';
import car_routes from './client/routes/car';


const app:Application =express();
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
mongoose.connect('mongodb+srv://denis:1111@cluster0.vkwym.mongodb.net/AutoProject?retryWrites=true&w=majority',
{ "useNewUrlParser": true, "useUnifiedTopology": true});
// app.use('/client',require('../src/client/routes/auth'));
app.use('/client',[auth_routes_client,car_routes]);
 app.use('/business-client',require('./business/routes/business-client'));

export=app;