import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PeriodEntity } from "./periods/period.entity";
import { PeriodModule } from "./periods/period.module";
import { WorkoutEntity } from "./workouts/workout.entity";
import { WorkoutModule } from "./workouts/workout.module";
// require('dotenv').config();
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "period",
    entities: [PeriodEntity, WorkoutEntity],
    synchronize: false,
  }),],
})
export class DatabaseModule{};

@Module({
  imports: [DatabaseModule, PeriodModule, WorkoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{};