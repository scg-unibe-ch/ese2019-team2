import {Router, Request, Response} from 'express';
const User = require('../models/user.model');
const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send('API: USERS<br>Possible requests:<br><ul><li>/login</li> <li>/:id</li></ul>');
});
router.post('/login', async (req: Request, res: Response) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) {
           return res.status(418).json({error: 'Error'});
        }

        if (!user) {
           return res.status(418).json({error: "No such user found"});
        }
        if (user.password !== req.body.password) {
            return res.status(401).json({
                error: 'Unauthorized'
            })
        }
        else {
            res.status(200).json(user);
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
        res.json(user);
    });    
});

router.post('/register', async (req: Request, res: Response) => {
    User.find({$or: [
        {username: req.body.username},
        {email: req.body.email}
    ]}, (err: any, user: any) => {
        if (user.length !== 0){
            res.status(418).json({error: "user already exists"});
        return;
        }else {
            const user = new User({
                lastName: req.body.lastname,
                firstName: req.body.firstname,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            });
            user.save((err: Error, user: any)=> {
                if (err) {
                    console.error(err);
                    res.status(418).json({error: err});
                }
                res.status(201).json(user);
                
            })
        }
    })
});


export const UsersController: Router = router;
