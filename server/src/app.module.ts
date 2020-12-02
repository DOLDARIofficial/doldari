import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './roles/App.roles';
// typeOrm

// import loadConfig from './config/loadConfig';
// import { TypeOrmConfigService } from './config/database.config';

// modules
// import { TestModule } from './resource/test/test.module';
import { BookModule } from './resource/books/books.module';
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
    AccessControlModule.forRoles(roles),
    AuthModule,
    RoomModule,
    BookModule,
  ],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
