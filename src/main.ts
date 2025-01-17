import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('User Authentication')
  .setDescription(
    'The API details for the User Authentication Demo application using Firebase in the NestJS backend.',
  )
  .setVersion('1.0')
  .addTag('Authentication')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

const PORT = process.env.PORT || 8000
  await app.listen(PORT);
}
bootstrap();
