import { IProduct, IService } from "../interfaces";
import Products from '../database/models/Product'
import { Op } from "sequelize";

export default class ProductsService implements IService {
  constructor(private model = Products){}

  async getAll(): Promise<IProduct[]> {
    const data = await this.model.findAll();
    return data
  }

  async search(q: string): Promise<IProduct[]> {
    const data = await this.model.findAll({
      where: {
        [Op.or]: [{
          descricao: {
            [Op.like]: `%${q}%`
          }
        },{
          produto: {
            [Op.like]: `%${q}%`
          }
        }],
    }
    });
    return data
  }

  async getById(id: number): Promise<IProduct | null> {
    const data = await this.model.findByPk(id);
    if (!data) throw new Error('ras')
    return data
  }

  async create(product: Omit<IProduct, "id">): Promise<boolean> {
    const data = await this.model.create(product)
    return data.isNewRecord
  }

  async update(id: number, product: Omit<IProduct, "id" | "created" | "updated">): Promise<boolean> {
    const data = await this.model.update(product, {
      where: {
        id: id
      }
    })
    return !!(data)
  }
  async patch(id: number, product: Omit<IProduct, "id" | "created" | "updated">): Promise<boolean> {
    const data = await this.model.update(product, {
      where: {
        id: id
      }
    })
    return !!(data)
  }
  async destroy(id: number): Promise<boolean> {
    const data = await this.model.destroy({
      where : {
        id: id
      }
    })
    return !!(data)
  }
}