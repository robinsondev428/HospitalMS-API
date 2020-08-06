import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    /**
   * Create the a Nest app based in the appModule
   */
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  /**
   * Configuration for the document
   */
  const options = new DocumentBuilder()
    .setTitle('Evaluation API')
    .setDescription('Este API se utilizará para evaluar los servicios del hospital')
    .setVersion('1.0')
    .build();
  /**
   * Set the document to the swagger FrontEnd
   */
  const document = SwaggerModule.createDocument(app, options);
  /**
   * Enlace the swagger document and the nest app
   */
  SwaggerModule.setup('api', app, document);
  /**
   * The port will be 3000
   */
  await app.listen(3001);
}
bootstrap();
