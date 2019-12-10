import {Request, Response, Router} from 'express';

const Category = require('../models/category.model');
const router: Router = Router();

// get category by name
router.get('/name/:name', async (req: Request, res: Response) => {
   Category.find({name: req.params.name}, (err: any, category: any) => {
      if (err) {
         console.log(err);
         return res.status(418).json({error: err});
      }
      return res.status(200).json(category);
   });
});

// request all categories
router.get('/all', async (req: Request, res: Response) => {
   Category.find((err: any, categories: any) => {
      if (err) {
         console.log(err);
         res.status(418).json({error: err});
      } else {
         res.status(200).json(categories);
      }
   });
});

export const CategoriesController: Router = router;
