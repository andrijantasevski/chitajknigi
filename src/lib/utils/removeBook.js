import { booksStore, booksRead } from "./booksStore"

let booksData;
booksStore.subscribe((data) => booksData = data);

let booksReadData;
booksRead.subscribe(data => booksReadData = data);

export default function removeBook(index) {
    let filteredBooks = booksData.filter(book => book.bookID !== index)
    booksStore.update(data => data = [...filteredBooks]);
    let filteredBooksRead = booksReadData.filter(book => book.bookID !== index);
    booksRead.update((data) => data = [...filteredBooksRead]);
}