import { booksStore, bookDuplicateStore, booksRead } from "./booksStore.js"

let booksArray;

booksStore.subscribe(data => booksArray = data);

class Book {
    constructor(_bookTitle, _bookAuthor, _bookPages, _bookPagesRead, booksArray) {
        this.bookTitle = _bookTitle;
        this.bookAuthor = _bookAuthor;
        this.bookPages = _bookPages;
        this.bookPagesRead = _bookPagesRead;
        this.bookID = new Date().valueOf();
    }
}

export default function addBook(bookTitle, bookAuthor, bookPages, bookPagesRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookPagesRead, booksArray);

    const isBookDuplicate = booksArray.find(book => book.bookTitle === newBook.bookTitle);

    if (isBookDuplicate) {
        return bookDuplicateStore.update(data => data = "Книгата е веќе внесена.")
    } else {
        booksStore.update(data => [...data, newBook]);
        let bookPagesRead = booksArray.filter(book => book.bookPages === book.bookPagesRead);
        booksRead.update(data => data = [...bookPagesRead]);
    }
}