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
  created: DataTypes.DATE,
  updated: DataTypes.DATE
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'products',
});

export default Product;
