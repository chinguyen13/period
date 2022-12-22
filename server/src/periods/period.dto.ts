import { Expose } from "class-transformer";
import {IsNotEmpty } from "class-validator";

export class PeriodDto{
  @Expose()
  id: number;

  @IsNotEmpty()
  start_date: string;
}