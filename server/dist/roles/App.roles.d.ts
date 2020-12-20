import { RolesBuilder } from 'nest-access-control';
export declare enum AppRoles {
    USER = "user",
    GUEST = "guest"
}
export declare const roles: RolesBuilder;
