<script>
	import addBook from './utils/addBook';
	import resetForm from './utils/resetForm';
	import { bookDuplicateStore } from './utils/booksStore';
	import BookDuplicateModal from './BookDuplicateModal.svelte';

	let bookDuplicateError;

	bookDuplicateStore.subscribe((data) => (bookDuplicateError = data));

	let fields = { bookTitle: '', bookAuthor: '', bookPages: '', bookPagesRead: '' };
	let errors = {
		bookTitle: '',
		bookAuthor: '',
		bookPages: '',
		bookPagesRead: '',
		bookPagesReadLimit: ''
	};

	const submitHandler = (boolean) => {
		let isFormValid = boolean;

		const bookTitleRegEx = new RegExp(
			'^[A-aa-z0-9-.АаБбВвГгДдЃѓЕеЖжЗзЅѕИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЌќУуФфХхЦцЧчЏџШшs]*$'
		);

		const bookAuthorRegEx = new RegExp(
			'^[A-aa-z-.АаБбВвГгДдЃѓЕеЖжЗзЅѕИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЌќУуФфХхЦцЧчЏџШшs]*$'
		);

		if (fields.bookTitle === '' || !bookTitleRegEx.test(fields.bookTitle)) {
			isFormValid = false;
			errors.bookTitle = 'Внесете име на книгата.';
		} else {
			errors.bookTitle = '';
		}

		if (fields.bookAuthor === '' || !bookAuthorRegEx.test(fields.bookAuthor)) {
			isFormValid = false;
			errors.bookAuthor = 'Внесете автор на книгата.';
		} else {
			errors.bookAuthor = '';
		}

		if (isNaN(fields.bookPages) || !fields.bookPages || +fields.bookPages <= 0) {
			isFormValid = false;
			errors.bookPages = 'Внесете број на страни.';
		} else {
			errors.bookPages = '';
		}

		if (isNaN(fields.bookPagesRead) || !fields.bookPagesRead || +fields.bookPagesRead < 0) {
			isFormValid = false;
			errors.bookPagesRead = 'Внесете број на прочитани страни.';
		} else {
			errors.bookPagesRead = '';
		}

		if (
			errors.bookPages === '' &&
			errors.bookPagesRead === '' &&
			+fields.bookPagesRead > +fields.bookPages
		) {
			isFormValid = false;
			errors.bookPagesReadLimit = 'Бројот на прочитани страни е поголем од бројот на страни.';
		} else {
			errors.bookPagesReadLimit = '';
		}

		if (isFormValid) {
			addBook(fields.bookTitle, fields.bookAuthor, fields.bookPages, fields.bookPagesRead);
			console.log(bookDuplicateError);
			resetForm(fields);
		}
	};
</script>

<section class="w-11/12 mx-auto bg-base-300 mb-10 p-6 lg:p-8 rounded-xl">
	<h2 class="text-2xl mb-6">Додади книга</h2>
	<form on:submit|preventDefault={() => submitHandler(true)}>
		<div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="form-control">
				<input
					class={errors.bookTitle ? 'input input-error' : 'input'}
					type="text"
					placeholder="Наслов на книгата"
					bind:value={fields.bookTitle}
					on:keyup={errors.bookTitle ? () => submitHandler(false) : ''}
				/>
				{#if errors.bookTitle}
					<div class="text-error mt-2">{errors.bookTitle}</div>
				{/if}
			</div>

			<div class="form-control">
				<input
					class={errors.bookAuthor ? 'input input-error' : 'input'}
					type="text"
					placeholder="Автор на книгата"
					bind:value={fields.bookAuthor}
					on:keyup={errors.bookAuthor ? () => submitHandler(false) : ''}
				/>
				{#if errors.bookAuthor}
					<div class="text-error mt-2">{errors.bookAuthor}</div>
				{/if}
			</div>

			<div class="form-control">
				<input
					class={errors.bookPages || errors.bookPagesReadLimit ? 'input input-error' : 'input'}
					type="text"
					placeholder="Број на страни на книгата"
					bind:value={fields.bookPages}
					on:keyup={errors.bookPages || errors.bookPagesReadLimit ? () => submitHandler(false) : ''}
				/>
				{#if errors.bookPages}
					<div class="text-error mt-2">{errors.bookPages}</div>
				{/if}

				{#if errors.bookPagesReadLimit}
					<div class="text-error mt-2">{errors.bookPagesReadLimit}</div>
				{/if}
			</div>

			<div class="form-control">
				<input
					class={errors.bookPagesRead || errors.bookPagesReadLimit ? 'input input-error' : 'input'}
					type="text"
					placeholder="Број на прочитани страни"
					bind:value={fields.bookPagesRead}
					on:keyup={errors.bookPagesRead || errors.bookPagesReadLimit
						? () => submitHandler(false)
						: ''}
				/>
				{#if errors.bookPagesRead}
					<div class="text-error mt-2">{errors.bookPagesRead}</div>
				{/if}

				{#if errors.bookPagesReadLimit}
					<div class="text-error mt-2">{errors.bookPagesReadLimit}</div>
				{/if}
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<button class="btn btn-primary w-full" id="button-submit" type="submit">
				<img src="/media/icons/book-white.svg" alt="Book Icon" class="mr-2" /><span
					>Додади книга</span
				>
			</button>
			<button class="btn btn-disabled w-full" id="button-remove">
				<img src="/media/icons/trash-white.svg" alt="Trash Icon" class="mr-2" /><span
					>Избриши ги сите книги</span
				>
			</button>
		</div>
	</form>
</section>

{#if bookDuplicateError}
	<BookDuplicateModal />
{/if}
