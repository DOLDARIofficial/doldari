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
exports.BookPatchDto = void 0;
const class_validator_1 = require("class-validator");
class BookPatchDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], BookPatchDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "contents", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], BookPatchDto.prototype, "price", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Array)
], BookPatchDto.prototype, "authors", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "translators", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "isbn", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "publisher", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BookPatchDto.prototype, "state", void 0);
exports.BookPatchDto = BookPatchDto;
//# sourceMappingURL=bookPatch.dto.js.map