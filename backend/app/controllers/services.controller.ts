import {Request, Response, Router} from 'express';

const Service = require('../models/service.model');
const router: Router = Router();

// get services of a category
router.get('/category/:category', async (req: Request, res: Response) => {
   Service.find({category: req.params.category}, (err: any, services: any) => {
      if (err) {
         console.log(err);
         return res.status(418).json({error: err});
      }
      return res.status(200).json(services);
   });
});

// request services of a user -> my Services
router.get('/user/:username', async (req: Request, res: Response) => {
   Service.find({username: req.params.username}, (err: any, services: any) => {
      if (err) {
         console.log(err);
         return res.status(418).json({error: err});
      }
      return res.status(200).json(services);
   });
});

// specific search in one characteristic
router.get('/search/:searchField/:searchInput', async (req: Request, res: Response) => {
   const searchField = req.params.searchField.toString();

   switch (searchField) {
      case 'username':
         Service.find({username: req.params.searchInput}, (err: any, services: any) => {
            if (err) {
               console.log(err);
               return res.status(418).json({error: err});
            }
            return res.status(200).json(services);
         });
         break;
      case 'serviceName':
         Service.find({serviceName: req.params.searchInput}, (err: any, services: any) => {
            if (err) {
               console.log(err);
               return res.status(418).json({error: err});
            }
            return res.status(200).json(services);
         });
         break;
      case 'category':
         Service.find({category: req.params.searchInput}, (err: any, services: any) => {
            if (err) {
               console.log(err);
               return res.status(418).json({error: err});
            }
            return res.status(200).json(services);
         });
         break;
      case 'subCategory':
         Service.find({subCategory: req.params.searchInput}, (err: any, services: any) => {
            if (err) {
               console.log(err);
               return res.status(418).json({error: err});
            }
            return res.status(200).json(services);
         });
         break;
      case 'location':
         Service.find({location: req.params.searchInput}, (err: any, services: any) => {
            if (err) {
               console.log(err);
               return res.status(418).json({error: err});
            }
            return res.status(200).json(services);
         });
         break;
      case 'description':
         /*let searchString = req.params.searchInput.toString();
         searchString = `searchString\*`;*/
         Service.find({description: req.params.searchInput}, (err: any, services: any) => {
            if (err) {
               console.log(err);
               return res.status(418).json({error: err});
            }
            return res.status(200).json(services);
         });
         break;
   }

   /*
       if (searchField === 'username') {
           Service.find({ username: req.params.searchInput}, (err: any, services: any) => {
               if (err) {
                   console.log(err);
                   return res.status(418).json({error: err});
               }
               return res.status(200).json(services);
           });
       }
       Service.find({ username: req.params.searchInput}, (err: any, services: any) => {
           if (err) {
               console.log(err);
               return res.status(418).json({error: err});
           }
           return res.status(200).json(services);
       });*/

});

// request specific service (for details page)
router.get('/details/:username/:serviceName', async (req: Request, res: Response) => {
   Service.find({username: req.params.username, serviceName: req.params.serviceName}, (err: any, service: any) => {
      if (err) {
         console.log(err);
         return res.status(418).json({error: err});
      }
      return res.status(200).json(service);
   });
});

// add new service
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
