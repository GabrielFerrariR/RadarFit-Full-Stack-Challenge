import * as express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/produtos', (req, res) => res.json({ ok: true }));
    this.app.get('/produtos/find', (req, res) => res.json({ ok: true }));
    this.app.get('/produtos/:id', (req, res) => res.json({ ok: true }));
    this.app.post('/produtos', (req, res) => res.json({ ok: true }));
    this.app.put('/produtos/:id', (req, res) => res.json({ ok: true }));
    this.app.patch('/produtos/:id', (req, res) => res.json({ ok: true }));
    this.app.delete('/produtos/:id', (req, res) => res.json({ ok: true }));
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
