import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'express-handlebars'
import {TimingInterceptor} from "./TimingInterceptor";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)


  app.engine('hbs', hbs({
    extname: 'hbs',
    partialsDir: join(__dirname, '..', 'views/partials'),
    defaultLayout: 'main',
    layoutsDir: join(__dirname, '..', 'views/layouts'),
  }));
  app.useStaticAssets(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useGlobalInterceptors(new TimingInterceptor());
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT);
}
bootstrap();