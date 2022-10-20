import app from "./config/express";
import environment from './config/environment';
import connect from './config/mongoose';
import {
  attachRoutes,
} from './routes/v1/articleRoutes';

// MONGODB CONNECTION
connect()

// SERVER 
app.listen(environment.PORT,
  () => console.log(`server started on port ${environment.PORT} (${environment.NODE_ENV})`)
);

attachRoutes(app);


