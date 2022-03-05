import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //enableCors will help you connect the front end to the backend
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
