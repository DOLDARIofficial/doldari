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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const health_service_1 = require("./health.service");
const health_dto_1 = require("./dto/health.dto");
const HealthPatch_dto_1 = require("./dto/HealthPatch.dto");
let HealthController = class HealthController {
    constructor(healthService) {
        this.healthService = healthService;
    }
    async findAll(limit) {
        return this.healthService.findAll(limit);
    }
    async findOne(roomId) {
        return this.healthService.findOne(roomId);
    }
    async createRoom(data) {
        console.log(data);
        return this.healthService.createRoom(data);
    }
    async updateRoom(data) {
        return this.healthService.updateRoom(data);
    }
    async deleteRoom(id) {
        return this.healthService.deleteRoom(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "findAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('healthId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [health_dto_1.HealthDto]),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "createRoom", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HealthPatch_dto_1.HealthPatchDto]),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "updateRoom", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "deleteRoom", null);
HealthController = __decorate([
    common_1.Controller('health'),
    __metadata("design:paramtypes", [health_service_1.HealthService])
], HealthController);
exports.HealthController = HealthController;
//# sourceMappingURL=health.controller.js.map