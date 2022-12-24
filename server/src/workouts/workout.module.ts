import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutController } from "./workout.controller";
import { WorkoutEntity } from "./workout.entity";
import { WorkoutService } from "./workout.service";



@Module({
  imports:[
    TypeOrmModule.forFeature([WorkoutEntity])
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}