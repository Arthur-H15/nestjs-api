import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({errorHttpStatusCode:422}))
  const configuracao= new DocumentBuilder().setTitle('API de Ordem de Serviço').setDescription('API de Ordem de Serviço').setVersion('1.0').build();
  const documentacao=SwaggerModule.createDocument(app,configuracao);
  SwaggerModule.setup('api',app,documentacao);
  await app.listen(3000);
}
bootstrap();
