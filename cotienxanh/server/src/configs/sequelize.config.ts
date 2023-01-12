import { Sequelize } from 'sequelize-typescript';
import { Detail } from 'src/botranh/detail.entity';
import { BoTranh } from '../botranh/botranh.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'ec2-3-1-213-43.ap-southeast-1.compute.amazonaws.com',
        port: 3306,
        username: 'nguyen',
        password: 'Nguyenpro133@',
        database: 'cotienxanh',
      });
      sequelize.addModels([BoTranh, Detail]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
