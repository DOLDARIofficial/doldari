"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = require("helmet");
const morgan_1 = require("morgan");
const cookie_parser_1 = require("cookie-parser");
const express_1 = require("express");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    app.use(express_1.json({ limit: '15mb' }));
    app.use(express_1.urlencoded({ extended: true, limit: '15mb' }));
    app.use(helmet_1.default());
    app.use(morgan_1.default('common'));
    app.use(cookie_parser_1.default('@#@$MYSIGN#@$#$'));
    const whiteList = [
        'http://localhost:3001',
    ];
    app.enableCors({
        origin: whiteList,
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map