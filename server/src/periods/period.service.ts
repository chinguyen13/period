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
    return await this.periodRepository.find({
      order: {
        start_date: 'ASC'
      }
    });
  }

  async delete(month: number){
    return await this.periodRepository.createQueryBuilder()
    .delete()
    .where(`start_date LIKE "%/${month.toString().padStart(2,"0")}/%"`)
    .execute();
  }
}