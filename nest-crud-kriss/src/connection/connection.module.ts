import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/User.entity';
import { ConnectionController } from './connection.controller';
import { ConnectionService } from './connection.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class ConnectionModule {}
