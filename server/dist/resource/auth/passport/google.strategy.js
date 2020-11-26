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
exports.GoogleStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
const config = {
    clientID: '652559907955-u17jnat6auvjqe1kcq6imhn67jdnppbl.apps.googleusercontent.com',
    clientSecret: 'I4BRjcNIXF5quc3V5T3uKkiA',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true,
    scope: ['email', 'profile'],
};
let GoogleStrategy = class GoogleStrategy extends passport_1.PassportStrategy(passport_google_oauth20_1.Strategy, 'google') {
    constructor(authService) {
        super(Object.assign({}, config));
        this.authService = authService;
    }
    async validate(request, accessToken, refreshToken, profile, done) {
        try {
            const newUser = {
                id: profile._json.sub,
                email: profile._json.email,
                pw: 'test',
            };
            this.authService.addUser(newUser)
                .then(() => {
                done(null, profile.name);
            })
                .catch((err) => {
                console.log('[Error in Google Validation] ... ');
                console.log(err);
                done(false);
            });
        }
        catch (err) {
            done(err, false);
        }
    }
};
GoogleStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;
//# sourceMappingURL=google.strategy.js.map