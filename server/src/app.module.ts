import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccessControlModule } from 'nest-access-control';
// typeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { roles } from './roles/App.roles';
// import loadConfig from './config/loadConfig';
// import { TypeOrmConfigService } from './config/database.config';

// modules
// import { TestModule } from './resource/test/test.module';
import { BookModule } from './resource/books/books.module';
import { AuthModule } from './resource/auth/auth.module';
import { RoomModule } from './resource/room/room.module';
import { Healthmodule } from './resource/health/health.module';
// import { RoomEntity } from './resource/room/entities/room.entitiy';
// import { TestUser } from './resource/auth/entities/testUser.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-1.cebn0tm9t8p4.us-east-2.rds.amazonaws.com',
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
    Healthmodule,
  ],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
