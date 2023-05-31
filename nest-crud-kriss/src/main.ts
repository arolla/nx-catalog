import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });

    const config = new DocumentBuilder()

        .setTitle('Swagger nest book')

        .setDescription('The nest book description')

        .setVersion('1.0')

        .addTag('book')

        .build();


    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api', app, document)
    await app.listen(3000);
}

bootstrap();
