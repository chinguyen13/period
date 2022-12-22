import { BadRequestException, UnprocessableEntityException } from '@nestjs/common/exceptions';
import { ArgumentMetadata } from '@nestjs/common/interfaces/features/pipe-transform.interface';
import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3006);
}
bootstrap();
