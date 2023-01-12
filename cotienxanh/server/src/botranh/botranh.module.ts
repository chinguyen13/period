import { Module } from '@nestjs/common';
import { BoTranhController } from './botranh.controller';
import { boTranhProviders } from './botranh.providers';
import { BoTranhService } from './botranh.service';

@Module({
  imports: [],
  controllers: [BoTranhController],
  providers: [BoTranhService, ...boTranhProviders],
})
export class BoTranhModule {}
