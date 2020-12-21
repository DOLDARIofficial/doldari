const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const helmet_1 = __importDefault(require('helmet'));
const morgan_1 = __importDefault(require('morgan'));
const cookie_parser_1 = __importDefault(require('cookie-parser'));
const express_1 = require('express');
const core_1 = require('@nestjs/core');
const app_module_1 = require('./app.module');

async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
  app.use(express_1.json({ limit: '15mb' }));
  app.use(express_1.urlencoded({ extended: true, limit: '15mb' }));
  app.use(helmet_1.default());
  app.use(morgan_1.default('common'));
  app.use(cookie_parser_1.default('@#@$MYSIGN#@$#$'));
  const whiteList = [
    'http://localhost:3000',
  ];
  app.enableCors({
    origin: whiteList,
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
// # sourceMappingURL=main.js.map
