import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { PeriodDto } from "./period.dto";
import { PeriodService } from "./period.service";


@Controller('period')
export class PeriodController{
  constructor( private readonly periodService: PeriodService) {
  }

  @Get()
  getPeriod(): Promise<PeriodDto[]>{
    return this.periodService.find();
  }

  @Post()
  addPeriod(@Body() period: PeriodDto): Promise<PeriodDto>{
    return this.periodService.save(period);
  }

  @Delete()
  deletePeriod(@Param('month') month: number){
    return this.periodService.delete(month);
  }

}