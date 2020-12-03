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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const book_dto_1 = require("./dto/book.dto");
const bookPatch_dto_1 = require("./dto/bookPatch.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getAll(limit) {
        return this.bookService.findAll(limit);
    }
    async findOne(bookId) {
        return this.bookService.findOne(bookId);
    }
    async createBook(data) {
        console.log(data);
        return this.bookService.createBook(data);
    }
    async updateBook(data) {
        return this.bookService.updateBook(data);
    }
    async deleteBook(id) {
        return this.bookService.deleteBook(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_dto_1.BookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bookPatch_dto_1.BookPatchDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
BookController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [books_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=books.controller.js.map