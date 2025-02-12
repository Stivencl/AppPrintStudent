
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from "@sequelize/postgres";

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'printstudent',
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
   // ssl: true,
   // clientMinMessages: 'notice',
  });

  export default sequelize;
