"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor() {
        this.books = [];
    }
    async getAll() {
        return this.books;
    }
    async findOne(id) {
        const book = this.books.find((book) => book.id === id);
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID: ${id} not found.`);
        }
        return this.findOne(id);
    }
    deleteOne(id) {
        this.findOne(id);
        this.books = this.books.filter((book) => book.id !== +id);
    }
    create(bookData) {
        this.books.push(Object.assign({ id: this.books.length + 1 }, bookData));
    }
    update(id, updateDate) {
        const book = this.findOne(id);
        this.deleteOne(id);
        this.books.push(Object.assign(Object.assign({}, book), updateDate));
    }
};
BooksService = __decorate([
    common_1.Injectable()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map