import {Request, Response, Router} from 'express';
const Service = require('../models/service.model');
const router: Router = Router();


router.get('/:category', async (req: Request, res: Response) => {
    Service.find({category: req.params.category}, (err: any, services: any) => {
        if (err) {
            console.log(err);
            return res.status(418).json({error: err});
        }
        return res.status(200).json(services);
    });
});

router.get('/details/:id', async (req: Request, res: Response) => {
    Service.findById(req.params.id, (err: any, service: any) => {
        if (err) {
            console.log(err);
            return res.status(418).json({error: err});
        }
        res.json(service);
    });
});

router.post('/add', async (req: Request, res: Response) => {
    const service = new Service(req.body);
    service.save()
    // tslint:disable-next-line:no-shadowed-variable
        .then((service: any) => {
            res.status(200).json({'service': 'Added successfully'});
        })
        .catch(() => {
            res.status(418).send('Failed to create new record');
        });
});

export const ServicesController: Router = router;
