import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PeriodDto } from "./period.dto";
import { PeriodEntity } from "./period.entity";


@Injectable()
export class PeriodService{
  constructor(
    @InjectRepository(PeriodEntity) private readonly periodRepository: Repository<PeriodEntity>
  ){}


  async save(data: PeriodDto): Promise<PeriodDto>{
    return await this.periodRepository.save(data);
  }

  async find(): Promise<PeriodDto[]>{
    return await this.periodRepository.find();
  }
}