// import everything from express and assign it to the express variable
import express from 'express';

// import all the controllers. If you add a new controller, make sure to import it here as well.
import { UsersController } from './controllers';
import { ServicesController } from './controllers';

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saegi95:saegi95@esedatabaseteam2-bvhax.mongodb.net/ESEdatabaseTeam2?retryWrites=true&w=majority');
const connection = mongoose.connection;

// create a new express application instance
const app: express.Application = express();
app.use(express.json());

// define the port the express app will listen on
let port = 3000;
if (process.env.PORT !== undefined) {
  port = parseInt(process.env.PORT, 10);
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/users', UsersController);
// !!! does not work like that... always using services db
app.use('/services', ServicesController);

// start serving the application on the given port
connection.once('open', () => {
  app.listen(port, () => {
    // success callback, log something to console as soon as the application has started
    console.log(`Listening at http://localhost:${port}/`);
  });
});

