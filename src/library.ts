import { Book, Genre } from "./book";

export class Library {
  private books: Book[] = [];
  private nextId: number = 1;

  add_Book(book: Omit<Book, "id">): Book {
    const newBook = { ...book, id: this.nextId++ };
    this.books.push(newBook);
    return newBook;
  }

  list_Books(): void {
    this.books.forEach((book) => console.log(book));
  }

  search_Books<K extends keyof Book>(value: Book[K]): Book[] {
    return this.books.filter((book) => book["title"] === value);
  }

  update_Book(id: number, updates: Partial<Omit<Book, "id">>): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updates };
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
