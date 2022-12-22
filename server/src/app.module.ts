import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PeriodEntity } from "./periods/period.entity";
import { PeriodModule } from "./periods/period.module";


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'password',
    database: 'period',
    entities: [PeriodEntity],
    synchronize: true,
  }),],
})
export class DatabaseModule{};

@Module({
  imports: [DatabaseModule, PeriodModule],
})
export class AppModule{};