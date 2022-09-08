import * as express from 'express';
import 'express-async-errors';
import { ProductsController } from './controllers/products.controller';
import { IController } from './interfaces';
import errorMiddleWare from './MiddleWares/errorMiddleWare';

class App {
  public app: express.Express;
  private productsController: IController;

  constructor() {
    this.app = express();
    this.productsController =  new ProductsController()
    this.config();

    this.app.get('/produtos', (req, res, next) => this.productsController.getAll(req, res, next));
    this.app.get('/produtos/find', (req, res, next) => this.productsController.search(req, res, next));
    this.app.get('/produtos/:id', (req, res, next) => this.productsController.getById(req, res, next));
    this.app.post('/produtos', (req, res, next) => this.productsController.create(req, res, next));
    this.app.put('/produtos/:id', (req, res, next) => this.productsController.update(req, res, next));
    this.app.patch('/produtos/:id', (req, res, next) => this.productsController.patch(req, res, next));
    this.app.delete('/produtos/:id', (req, res, next) => this.productsController.destroy(req, res, next));
    this.app.use(errorMiddleWare);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
