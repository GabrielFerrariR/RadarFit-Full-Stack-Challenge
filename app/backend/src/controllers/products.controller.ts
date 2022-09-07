import { NextFunction, Request, Response } from "express";
import { IController } from "../interfaces";
import StatusCodes from 'http-status-codes'

import ProductsService from "../services/products.service";

export class ProductsController implements IController {
  constructor(private service = new ProductsService()) {}
  async getAll(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const data = await this.service.getAll()
    res.status(StatusCodes.OK).json(data)
  }
  async search(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { q } = req.params;
    const data = await this.service.search(q)
    res.status(StatusCodes.OK).json(data)
  }
  async getById(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params;
    const data = await this.service.getById(Number(id))
    res.status(StatusCodes.OK).json(data)
  }
  async create(req: Request, res: Response, _next: NextFunction): Promise<void> {
    await this.service.create(req.body)
    res.status(StatusCodes.CREATED).end()
  }
  async update(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params;
    await this.service.update(+id,req.body)
    res.status(StatusCodes.NO_CONTENT).end()
  }
  async patch(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params;
    await this.service.patch(+id,req.body)
    res.status(StatusCodes.NO_CONTENT).end()
  }
  async destroy(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params;
    await this.service.destroy(+id)
    res.status(StatusCodes.NO_CONTENT).end()
  }

}