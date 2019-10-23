import {Router, Request, Response} from 'express';
const User = require('../models/user.model');
const router: Router = Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
           return res.status(418).json({error: "No such user found"});
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(401).json({
                error: 'Unauthorized'
            })
        }
        else {
            getUserInformation(user._id, "exampletoken").then(data => {res.json(data)});
        }
    })
});

router.get('/:name', async (req: Request, res: Response) => {
    User.find({username: req.params.name}, (err: any, user: any) =>{
        if (err){
            console.log(err);
            return res.status(418).json({error: err});
        }
        if (user.length === 0){
           return res.status(418).json({error: "No such user found"});
        }
        res.statusCode = 200;
        getUserInformation(user._id).then(data => {res.json(data)});
    });    
});

router.post('/register', async (req: Request, res: Response) => {
    User.find({$or: [
        {username: req.body.username},
        {email: req.body.email}
    ]}, async (err: any, user: any) => {
        if (user.length !== 0){
            res.status(418).json({error: "user already exists"});
        return;
        }else {
            const user = new User({
                lastName: req.body.lastname,
                firstName: req.body.firstname,
                email: req.body.email,
                username: req.body.username,
                password: await bcrypt.hash(req.body.password, saltRounds),
            });
            user.save((err: Error, user: any)=> {
                if (err) {
                    console.error(err);
                    res.status(418).json({error: err});
                }
                getUserInformation(user._id, "exampletoken").then(data => {res.json(data)});
            })
        }
    })
});

async function getUserInformation(userid: number, token?: any){
    const userInformation = await User.findById(userid, '-password -_id -__v');
    const result = {userInformation, token: 'exampletoken'};
    return result;
}


export const UsersController: Router = router;
