// External
import express from 'express';
import bodyParser from 'body-parser';
// Own
import { ENV_API } from './config/environment';
import loadRouter from './router';

// App express
const app = express();
//
app.set('env', ENV_API.ENVIRONMENT);

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Load Router
loadRouter(app);

app.listen(ENV_API.PORT, () => {
  console.log(
    `API is running at ${ENV_API.HOST}:${ENV_API.PORT}/api in ${app.get('env')} mode`
  );
});
