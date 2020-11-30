import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// typeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmConfigService } from './config/database.config';

// modules
// import { TestModule } from './resource/test/test.module';
import { AuthModule } from './resource/auth/auth.module';
import { RoomModule } from './resource/room/room.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-1.cgdowelkhyep.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '00000000',
      database: 'doldari',
      timezone: 'Asia/Seoul',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    RoomModule,
  ],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
