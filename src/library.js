"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const open_dialog = false;
class Library {
    constructor() {
        this.books = [];
        this.nextId = 1;
    }
    add_Book(book) {
        const newBook = Object.assign(Object.assign({}, book), { id: this.nextId++ });
        this.books.push(newBook);
        return newBook;
    }
    list_Books() {
        this.books.forEach((book) => console.log(book));
    }
    search_Books(value) {
        return this.books.filter((book) => book["title"] === value);
    }
    update_Book(id, updates) {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), updates);
        }
    }
    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
}
exports.Library = Library;
