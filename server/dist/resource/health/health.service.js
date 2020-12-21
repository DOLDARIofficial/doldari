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
exports.HealthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const health_entitiy_1 = require("./entities/health.entitiy");
let HealthService = class HealthService {
    constructor(HealthRepository) {
        this.HealthRepository = HealthRepository;
    }
    async findAll(limit) {
        return this.HealthRepository
            .createQueryBuilder()
            .addOrderBy('createdAt', 'DESC')
            .limit(limit)
            .getMany();
    }
    async findOutline(important = 2) {
        const newHealth = await this.HealthRepository
            .createQueryBuilder()
            .orderBy('createdAt')
            .limit(20)
            .getMany();
        return newHealth.concat(newHealth);
    }
    async findOne(healthId) {
        return this.HealthRepository.findOne(healthId);
    }
    async createRoom(healthData) {
        return this.HealthRepository.save(healthData);
    }
    async updateRoom(healthData) {
        const { healthId, createdAt, name, content, userId, price, } = healthData;
        const result = await this.HealthRepository
            .update({ healthId }, {
            createdAt, name, content, userId, price,
        });
        return result.affected;
    }
    async deleteRoom(healthId) {
        const result = await this.HealthRepository.delete(healthId);
        return result.affected;
    }
};
HealthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(health_entitiy_1.HealthEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HealthService);
exports.HealthService = HealthService;
//# sourceMappingURL=health.service.js.map