export interface DoldariDB {
    password: string;
    engine: 'mysql' | 'mariadb';
    port: number;
    host: string;
    username: string;
}
export interface Doldari {
    database: DoldariDB;
}
