/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { BoTranh } from './botranh.entity';
import { Detail } from './detail.entity';

@Injectable()
export class BoTranhService {
  constructor(
    @Inject('BOTRANH_REPOSITORY')
    private boTranhRepository: typeof BoTranh,
  ) {}

  async findAll(): Promise<BoTranh[]> {
    return this.boTranhRepository.findAll<BoTranh>();
  }

  async save(boTranh: any): Promise<BoTranh> {
    return this.boTranhRepository.create(boTranh, {include: [Detail]});
  }
}
