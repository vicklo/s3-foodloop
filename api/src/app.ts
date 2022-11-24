import express, { Handler } from 'express';
import config from '../settings';
import log from './logger';
import routes from './routes';
import { myDataSource } from "./appDataSource"
import cors from 'cors';

import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

const host = config.host
const port = config.port

const allowedOrigins = ['http://localhost:4200','*'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
  

const checkJwt:Handler = auth({
    audience: 'localhost:3000',
    issuerBaseURL: `https://dev-txtbte1v.us.auth0.com/`,
  });


const app = express();

app.use(cors(options));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
myDataSource.initialize().then(() => {log.info("Database connected")}).catch((error) => log.info(error))

app.listen(port,host, () => {
    log.info(`server listing to http://${host}:${port}`);
    routes(app,checkJwt);
})