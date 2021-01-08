import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = WinstonModule.createLogger(winstonConfig);
  const app = await NestFactory.create(AppModule, { logger });
  await app.listen(3000);
}
bootstrap();
