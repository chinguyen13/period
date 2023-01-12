import { Module } from '@nestjs/common';
import { databaseProviders } from './sequelize.config';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
