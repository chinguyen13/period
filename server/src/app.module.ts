import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PeriodEntity } from "./periods/period.entity";
import { PeriodModule } from "./periods/period.module";
require('dotenv').config();
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [PeriodEntity],
    synchronize: true,
  }),],
})
export class DatabaseModule{};

@Module({
  imports: [DatabaseModule, PeriodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{};