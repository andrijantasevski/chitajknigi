export default function resetForm(fields) {
    const form = document.querySelector('form');
    form.reset();

    const defaultFields = { bookTitle: '', bookAuthor: '', bookPages: '', bookPagesRead: '' };
    Object.assign(fields, defaultFields);
};