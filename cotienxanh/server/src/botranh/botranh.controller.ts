import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoTranh } from './botranh.entity';
import { BoTranhService } from './botranh.service';

@Controller('botranh')
export class BoTranhController {
  constructor(private readonly boTranhService: BoTranhService) {}

  @Get()
  getAll(): Promise<BoTranh[]> {
    return this.boTranhService.findAll();
  }

  @Post()
  postTranh(@Body() boTranh: any): Promise<BoTranh> {
    return this.boTranhService.save(boTranh);
  }
}
