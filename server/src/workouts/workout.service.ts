import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorkoutDto } from "./workout.dto";
import { WorkoutEntity } from "./workout.entity";


@Injectable()
export class WorkoutService{
  constructor(
    @InjectRepository(WorkoutEntity) private readonly workoutRepository: Repository<WorkoutEntity>
  ){}

  async find(): Promise<WorkoutDto[]>{
    return await this.workoutRepository.find();
  }

  async save(data: WorkoutDto): Promise<WorkoutDto>{
    return await this.workoutRepository.save(data);
  }

}