import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PeriodEntity } from "./period.entity";
import { PeriodService } from "./period.service";
import { PeriodController } from "./period.controller";


@Module({
  imports:[
    TypeOrmModule.forFeature([PeriodEntity])
  ],
  controllers: [PeriodController],
  providers: [PeriodService],
})
export class PeriodModule {}