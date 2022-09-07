import { NextFunction, Request, Response } from "express";

export interface IController {
  getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
  search(req: Request, res: Response, next: NextFunction): Promise<void>;
  getById(req: Request, res: Response, next: NextFunction):  Promise<void>;
  create(req: Request, res: Response, next: NextFunction): Promise<void>;
  update(req: Request, res: Response, next: NextFunction): Promise<void>;
  patch(req: Request, res: Response, next: NextFunction): Promise<void>;
  destroy(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface IProduct {
  id: number;
  produto:string;
  valor: number;
  descricao: string;
  created: string;
  updated: string;
}

export interface IService {
  getAll(): Promise<IProduct[]>;
  search(q: string): Promise<IProduct[]>;
  getById(id: number):  Promise<IProduct>;
  create(product: Omit<IProduct, 'id'>): Promise<boolean>;
  update(id: number, product: Omit<IProduct, 'id' | 'created' | 'updated'>): Promise<boolean>;
  patch(id: number, product: Omit<IProduct, 'id' | 'created' | 'updated'>): Promise<boolean>;
  destroy(id: number): Promise<boolean>;
}