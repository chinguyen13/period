import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoTranhModule } from './botranh/botranh.module';
import { DatabaseModule } from './configs/sequelize.module';

@Module({
  imports: [DatabaseModule, BoTranhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
