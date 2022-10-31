import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MathModule } from './math.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MathModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    },
  );

  await app.listen();
}
bootstrap();