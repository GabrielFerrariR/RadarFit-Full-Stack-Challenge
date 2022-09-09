import { Options } from 'sequelize';
require('dotenv/config');

const config: Options = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || '123456',
  database: process.env.DATABASE || 'Radarfit',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
}

module.exports = config;
