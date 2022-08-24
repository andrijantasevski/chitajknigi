import { booksStore } from './booksStore';

export default function removeHandler() {
    booksStore.update(data => data = []);
};