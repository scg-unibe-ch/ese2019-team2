// import everything from express and assign it to the express variable
import express from 'express';

// further imports for using the mongodb as database
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

// import schema
const User = require('./models/users.model');

app.use(cors());
app.use(bodyParser.json());

// config. connection to mongodb
mongoose.connect('mongodb://localhost:27017/users');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection successfully!');
});

// registering new user
router.route('/users/register').post((req, res) => {
  const user = new User(req.body);
  user.save()
  // tslint:disable-next-line:no-shadowed-variable
      .then((user: any) => {
        res.status(200).json({'user': 'Thank you for registering! Registration successfully'});
      })
      .catch((err: any) => {
        res.status(400).send('Registration failed');
      });
});

// login existing user
router.route('/users/login/:id/:password').get((req, res) => {
  User.findById(req.params.id, (err: any, user: any) => {
    if (err) {
      console.log('Error: ' + err);
    } else if (req.params.password === user.password) {
      res.json(user);
    } else {
      res.json('wrong password or username');
    }
  });
});

app.use('/', router);

app.listen(3000, () => console.log('Listening on port 3000'));

