import {Router, Request, Response} from 'express';

const User = require('../models/user.model');
const router: Router = Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const PRIVATE_KEY = 'ArmadilloHumourTimingAccusationBeliefGirlfriendGuyPhotoTenantWinery';
const EXPIRATION_TIME = () => {
   return Math.floor(Date.now() / 1000) + (60 * 60);
};

router.get('/', async (req: Request, res: Response) => {
   res.statusCode = 200;
   res.send('API: USERS<br>Possible requests:<br><ul><li>(post, (username, password))/login</li><li>(get, username)/</li><li>(post, (lastname, firstname, email, username, password))/register</li></ul>');
});

router.post('/login', async (req: Request, res: Response) => {
   User.findOne({username: req.body.username}, async (err: any, user: any) => {
      if (err) {
         return res.status(418).json({error: 'Error'});
      }

      if (!user) {
         return res.status(418).json({error: 'No such user found'});
      }
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
         return res.status(401).json({
            error: 'Unauthorized'
         });
      } else {
         getUserInformation(user._id, true).then(data => {
            res.json(data);
         });
      }
   });
});

router.get('/:name', async (req: Request, res: Response) => {
   User.find({username: req.params.name}, (err: any, user: any) => {
      if (err) {
         console.log(err);
         return res.status(418).json({error: err});
      }
      if (user.length === 0) {
         return res.status(418).json({error: 'No such user found'});
      }
      return res.status(200).json(user);
   });
});

router.post('/register', async (req: Request, res: Response) => {
   User.find({
      $or: [
         {username: req.body.username},
         {email: req.body.email}
      ]
   }, async (err: any, user: any) => {
      if (user.length !== 0) {
         res.status(418).json({error: 'user already exists'});
         return;
      } else {
         // tslint:disable-next-line:no-shadowed-variable
         const user = new User({
            lastName: req.body.lastname,
            firstName: req.body.firstname,
            email: req.body.email,
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, saltRounds),
            role: req.body.role
         });
         // tslint:disable-next-line:no-shadowed-variable
         user.save((err: Error, user: any) => {
            if (err) {
               console.error(err);
               res.status(418).json({error: err});
            }
            getUserInformation(user._id, true).then(data => {
               res.status(200).json(data);
            });
         });
      }
   });
});

router.post('/edit/:_id', async (req: Request, res: Response) => {
   User.findById(req.params._id, (err: any, user: any) => {
      if (!user) {
         return res.status(400).send('Could not load document');
      } else {
         user._id = req.body.id;
         user.lastName = req.body.lastName;
         user.firstName = req.body.firstName;
         user.email = req.body.email;
         user.username = req.body.username;
         user.role = req.body.role;

         // tslint:disable-next-line:no-shadowed-variable
         user.save().then((user: any) => {
            res.json('Update done');
            // tslint:disable-next-line:no-shadowed-variable
         }).catch((err: any) => {
            res.status(400).send('Update failed');
         });
      }
   });
});

router.post('/profileInformation', async (req: Request, res: Response) => {
   const token = req.body.token;
   jwt.verify(token, PRIVATE_KEY, (err: any, decoded: any) => {
      if (err) {
         console.log(err);
         return res.status(401).json({message: err});
      }
      const userid = decoded.payload.userid;
      getUserInformation(userid).then(data => {
         res.status(200).json(data);
      });
   });
});

async function getUserInformation(userid: number, token: boolean = false) {
   const userInformation = await User.findById(userid);
   let result;
   if (token) {
      result = {
         userInformation,
         token: generateToken(
            {
               userid,
               username: userInformation.username,
               lastName: userInformation.lastName,
               firstName: userInformation.firstName,
               email: userInformation.email,
               role: userInformation.role
            }, EXPIRATION_TIME())
      };
   } else {
      result = {userInformation, token: undefined};
   }
   return result;
}

function generateToken(payload: any, expirationTime: number) {
   return jwt.sign({payload, exp: expirationTime}, PRIVATE_KEY);
}

export const UsersController: Router = router;
