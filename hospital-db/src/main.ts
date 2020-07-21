import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('TEC Hospital DB API')
  .setDescription('Este api se utilizara para gestionar el sistema del hospital del Tecnológico de Costa Rica')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('db', app, document);
  await app.listen(3000);
}
bootstrap();
