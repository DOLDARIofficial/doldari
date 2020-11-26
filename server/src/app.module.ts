import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TestModule } from './resource/test/test.module'
import { AuthModule } from './resource/auth/auth.module';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

=======
import { ConfigModule } from '@nestjs/config';

// typeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import loadConfig from './config/loadConfig';
import { TypeOrmConfigService } from './config/database.config';

// modules
//import { TestModule } from './resource/test/test.module';
import { AuthModule } from './resource/auth/auth.module';
import { RoomModule } from './resource/room/room.module';
import { RoomEntity } from './resource/room/entities/room.entitiy';
import { TestUser } from './resource/auth/entities/testUser.entity';
>>>>>>> c7f93c72c04663751a3486c27bcd5546255294c9
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
      autoLoadEntities: true
    }),
    AuthModule,
    RoomModule,
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
