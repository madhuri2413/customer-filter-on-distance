import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'; //third party middleware
import routes from './routes';
const app = express();
app.use(express.json()); //parsing content type of application/json built in middleware
app.use(express.urlencoded({ extended: true })); //help in parsing form url encoded data
app.use(cookieParser());
app.use(cors());
app.use('/intercom', routes);
export default app;
