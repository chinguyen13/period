import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PeriodEntity } from "./periods/period.entity";
import { PeriodModule } from "./periods/period.module";
// require('dotenv').config();
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: "ec2-3-1-213-43.ap-southeast-1.compute.amazonaws.com",
    port: 3306,
    username: "nguyen",
    password: "Nguyenpro133@",
    database: "period",
    entities: [PeriodEntity],
    synchronize: false,
  }),],
})
export class DatabaseModule{};

@Module({
  imports: [DatabaseModule, PeriodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{};