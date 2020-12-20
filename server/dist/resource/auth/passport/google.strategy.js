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
const config = {
    clientID: '822280945870-am3tfoa2vg72q6sabr7qi0ogoj9gast6.apps.googleusercontent.com',
    clientSecret: 'ivn2SYc6ASHZZcgvU9PNHKoc',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true,
    scope: ['email', 'profile'],
};
let GoogleStrategy = class GoogleStrategy extends passport_1.PassportStrategy(passport_google_oauth20_1.Strategy, 'google') {
    constructor() {
        super(Object.assign({}, config));
    }
    async validate(accessToken, refreshToken, profile, done) {
        try {
            const { name, emails, photos } = profile;
            const newUser = {
                email: emails[0].value,
                firstName: name.givenName,
                lastNaem: name.familyName,
                picture: photos[0].value,
                accessToken,
            };
            return this.authService.createUser(newUser)
                .then(() => {
                done(null, profile.name);
            })
                .catch((err) => {
                console.log('[Error in Google Validation] ... ');
                console.log(err);
                done(null, false);
            });
        }
        catch (err) {
            done(err, false);
        }
    }
};
GoogleStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;
//# sourceMappingURL=google.strategy.js.map