import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DoldariDB } from '../interfaces/doldari.interface';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const database = this.configService.get<DoldariDB>('database');

    return {
      type: database.engine,
      host: database.host,
      port: 3306,
      username: database.username,
      password: database.password,
      database: 'doldaridb',
      timezone: 'Asia/Seoul',
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
