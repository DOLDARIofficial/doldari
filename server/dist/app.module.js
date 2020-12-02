"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nest_access_control_1 = require("nest-access-control");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const App_roles_1 = require("./roles/App.roles");
const auth_module_1 = require("./resource/auth/auth.module");
const room_module_1 = require("./resource/room/room.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
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
            nest_access_control_1.AccessControlModule.forRoles(App_roles_1.roles),
            auth_module_1.AuthModule,
            room_module_1.RoomModule,
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map