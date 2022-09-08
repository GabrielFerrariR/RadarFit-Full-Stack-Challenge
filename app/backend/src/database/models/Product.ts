import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Product extends Model {
  public id!: number;
  public produto!: string;
  public valor!: number;
  public descricao!: string;
  public created!: string;
  public updated!: string;
}

Product.init({
  produto: DataTypes.STRING,
  valor: DataTypes.FLOAT,
  descricao: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'products',
  timestamps: true,
});

export default Product;
