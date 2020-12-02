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
exports.BookList = void 0;
const typeorm_1 = require("typeorm");
let BookList = class BookList {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BookList.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "contents", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "isbn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "datetime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Array)
], BookList.prototype, "authors", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "publisher", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Array)
], BookList.prototype, "translators", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BookList.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BookList.prototype, "state", void 0);
BookList = __decorate([
    typeorm_1.Entity({ name: 'Book' }),
    __metadata("design:paramtypes", [Object])
], BookList);
exports.BookList = BookList;
//# sourceMappingURL=Book.entities.js.map