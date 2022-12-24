import {Controller, Get, Post, Body} from '@nestjs/common';
import { WorkoutDto } from './workout.dto';
import { WorkoutService } from './workout.service';



@Controller('workout')
export class WorkoutController{
  constructor(private readonly workoutService: WorkoutService){}

  @Get()
  getAll(): Promise<WorkoutDto[]>{
    return this.workoutService.find();
  }

  @Post()
  create(@Body() data: any ): Promise<WorkoutDto>{
    return this.workoutService.save(data);
  }

}