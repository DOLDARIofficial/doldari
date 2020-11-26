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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const room_entitiy_1 = require("./entities/room.entitiy");
let RoomService = class RoomService {
    constructor(RoomRepository) {
        this.RoomRepository = RoomRepository;
    }
    async findAll(limit) {
        return this.RoomRepository
            .createQueryBuilder()
            .addOrderBy('createdAt', 'DESC')
            .limit(limit)
            .getMany();
    }
    async findOutline(important = 2) {
        const newRoom = await this.RoomRepository
            .createQueryBuilder()
            .orderBy('createdAt')
            .limit(20)
            .getMany();
        return newRoom.concat(newRoom);
    }
    async findOne(roomId) {
        return this.RoomRepository.findOne(roomId);
    }
    async createRoom(roomData) {
        return this.RoomRepository.save(roomData);
    }
    async updateRoom(roomData) {
        const { roomId, createdAt, name, content, userId, price } = roomData;
        const result = await this.RoomRepository
            .update({ roomId }, {
            createdAt, name, content, userId, price
        });
        return result.affected;
    }
    async deleteRoom(roomId) {
        const result = await this.RoomRepository.delete(roomId);
        return result.affected;
    }
};
RoomService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(room_entitiy_1.RoomEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map