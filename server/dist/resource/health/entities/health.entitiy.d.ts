import { Health } from '../interfaces/health.interface';
export declare class HealthEntity implements Health {
    healthId: number;
    createdAt: number;
    name: string;
    price: number;
    userId: string;
    content: string;
    state: string;
    constructor(partial: Partial<HealthEntity>);
    seller: string;
}
