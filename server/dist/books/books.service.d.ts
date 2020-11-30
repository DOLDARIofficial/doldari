export declare class BooksService {
    private books;
    getAll(): Promise<any[]>;
    findOne(id: number): any;
    deleteOne(id: number): void;
    create(bookData: any): void;
    update(id: number, updateDate: any): void;
}
