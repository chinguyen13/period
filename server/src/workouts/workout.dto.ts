import { Expose } from "class-transformer";
import {IsNotEmpty } from "class-validator";

export class WorkoutDto{
  @Expose()
  id: number;

  @IsNotEmpty()
  start_date: string;

  message: string;
}