import {Router, Request, Response} from 'express';

const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send('API: USERS<br>Possible requests:<br><ul><li>/login</li> <li>/:id</li></ul>');
});
router.post('/login', async (req: Request, res: Response) => {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
    res.statusCode = 200;

    res.json({username: 'Adrian', uuid: '1', token: 'thisIsAnExampleToken'});
    } else {
        res.statusCode = 401;
        res.send();
    }
});

router.get('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    res.statusCode = 200;
    res.send('Welcome to Express ' + name);
});


export const UsersController: Router = router;
