import {Request, Response, Router} from 'express';
const Service = require('../models/service.model');
const router: Router = Router();


router.get('/:category', async (req: Request, res: Response) => {
    Service.find({category: req.params.category}), (err: any, service: any) => {
        if (err) {
            console.log(err);
            return res.status(418).json({error: err});
        }
        res.statusCode = 200;

    };
});

router.get('/details/:id', async (req: Request, res: Response) => {

});

router.post('/add', async (req: Request, res: Response) => {

});

export const ServicesController: Router = router;
