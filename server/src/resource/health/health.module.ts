import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HealthEntity } from './entities/health.entitiy';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  imports: [TypeOrmModule.forFeature([HealthEntity])],
  controllers: [HealthController],
  providers: [HealthService],
  exports: [HealthService],
})
export class RoomModule {}
