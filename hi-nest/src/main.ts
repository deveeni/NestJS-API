import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, //유저들이 보낸걸 실제 사용하는 타입으로 변환시켜 줌 
  }));
  await app.listen(3000);
}
bootstrap();
