import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(process.env.mongoconurl)


import subjectrouter from './routes/subject.js';

import departmentrouter from './routes/department.js';
import studentrouter from './routes/student.js'
const app = express();

app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use('/sub',subjectrouter);
app.use('/sub',departmentrouter);
app.use('/sub',studentrouter);
app.listen(process.env.port, () => {

console.log(`start app on http://localhost:${process.env.port}`);


})