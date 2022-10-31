import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
      // 微服务
      ClientsModule.register([
        {
          name: 'MATH_SERVICE',
          transport: Transport.TCP,
          options: {
            port: 4000,
          },
        }
      ]),
      TypeOrmModule.forFeature([
        User
      ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
