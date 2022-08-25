import { booksStore, booksRead } from './booksStore';

export default function removeHandler() {
    booksStore.update(data => data = []);
    booksRead.update(data => data = []);
};