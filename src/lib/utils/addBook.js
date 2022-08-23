import { booksStore, bookDuplicateStore } from "./booksStore.js"

let booksArray;

booksStore.subscribe(data => booksArray = data);

class Book {
    constructor(_title, _author, _bookPages, _bookPagesRead, booksArray) {
        this.title = _title;
        this.author = _author;
        this.bookPages = _bookPages;
        this.bookPagesRead = _bookPagesRead;
        this.bookID = booksArray.length + 1;
    }
}

export default function addBook(bookTitle, bookAuthor, bookPages, bookPagesRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookPagesRead, booksArray);

    const isBookDuplicate = booksArray.find(book => book.bookTitle === newBook.bookTitle);

    if (isBookDuplicate) {
        return bookDuplicateStore.update(data => data = "Книгата е веќе внесена.")
    } else {
        booksStore.update(data => [...data, newBook]);
    }
}