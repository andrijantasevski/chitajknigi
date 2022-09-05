import { booksStore, booksRead } from "./booksStore";

export default function updateBook(_bookTitle, _bookAuthor, _bookPages, _bookPagesRead, bookObject) {
    booksStore.update(data => {
        let booksData = data;

        let booksReadData;

        const bookIndex = booksData.findIndex(item => item === bookObject);

        booksData[bookIndex] = {
            bookTitle: _bookTitle,
            bookAuthor: _bookAuthor,
            bookPages: _bookPages,
            bookPagesRead: _bookPagesRead,
            bookID: bookObject.bookID,
        }

        if (Number(booksData[bookIndex].bookPages) > Number(booksData[bookIndex].bookPagesRead)) {
            booksRead.update(data => {
                booksReadData = data;

                booksReadData = booksReadData.filter(book => book.bookID !== booksData[bookIndex].bookID)

                return [...booksReadData];
            })
        } else {
            booksRead.update(data => {
                booksReadData = data;

                const readBook = booksReadData.filter(book => book.bookID === booksData[bookIndex].bookID).length;

                if (readBook === 0) {
                    booksReadData.push(booksData[bookIndex]);
                }

                return [...booksReadData];
            })
        }


        return [...booksData];
    });
}