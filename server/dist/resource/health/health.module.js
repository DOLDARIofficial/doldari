"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const health_entitiy_1 = require("./entities/health.entitiy");
const health_controller_1 = require("./health.controller");
const health_service_1 = require("./health.service");
let RoomModule = class RoomModule {
};
RoomModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([health_entitiy_1.HealthEntity])],
        controllers: [health_controller_1.HealthController],
        providers: [health_service_1.HealthService],
        exports: [health_service_1.HealthService],
    })
], RoomModule);
exports.RoomModule = RoomModule;
//# sourceMappingURL=health.module.js.map