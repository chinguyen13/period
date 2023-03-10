import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3006,"0.0.0.0");
}
bootstrap();
