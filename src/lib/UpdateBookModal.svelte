<script>
	import updateBook from '../lib/utils/updateBook';

	export let bookTitle, bookAuthor, bookPages, bookPagesRead, bookID, bookObject;

	let fields = {
		newBookTitle: bookTitle,
		newBookAuthor: bookAuthor,
		newBookPages: bookPages,
		newBookPagesRead: bookPagesRead
	};

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
			/^[A-aa-z0-9-.АаБбВвГгДдЃѓЕеЖжЗзЅѕИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЌќУуФфХхЦцЧчЏџШш\s]*$/
		);

		const bookAuthorRegEx = new RegExp(
			/^[A-aa-z-.АаБбВвГгДдЃѓЕеЖжЗзЅѕИиЈјКкЛлЉљМмНнЊњОоПпРрСсТтЌќУуФфХхЦцЧчЏџШш\s]*$/gm
		);

		if (fields.newBookTitle === '' || !bookTitleRegEx.test(fields.newBookTitle)) {
			isFormValid = false;
			errors.bookTitle = 'Внесете име на книгата.';
		} else {
			errors.bookTitle = '';
		}

		if (fields.newBookAuthor === '' || !bookAuthorRegEx.test(fields.newBookAuthor)) {
			isFormValid = false;
			errors.bookAuthor = 'Внесете автор на книгата.';
		} else {
			errors.bookAuthor = '';
		}

		if (isNaN(fields.newBookPages) || !fields.newBookPages || +fields.newBookPages <= 0) {
			isFormValid = false;
			errors.bookPages = 'Внесете број на страни.';
		} else {
			errors.bookPages = '';
		}

		if (
			isNaN(fields.newBookPagesRead) ||
			!fields.newBookPagesRead ||
			+fields.newBookPagesRead < 0
		) {
			isFormValid = false;
			errors.bookPagesRead = 'Внесете број на прочитани страни.';
		} else {
			errors.bookPagesRead = '';
		}

		if (
			errors.bookPages === '' &&
			errors.bookPagesRead === '' &&
			+fields.newBookPagesRead > +fields.newBookPages
		) {
			isFormValid = false;
			errors.bookPagesReadLimit = 'Бројот на прочитани страни е поголем од бројот на страни.';
		} else {
			errors.bookPagesReadLimit = '';
		}

		if (isFormValid) {
			updateBook(
				fields.newBookTitle,
				fields.newBookAuthor,
				fields.newBookPages,
				fields.newBookPagesRead,
				bookObject
			);
			isChecked = false;
		}
	};
</script>

<input type="checkbox" id={bookID} class="modal-toggle" />
<div class="modal">
	<div class="modal-box bg-base-300">
		<h3 class="font-bold text-lg text-secondary mb-5">Променете податоци за {bookTitle}</h3>
		<form class="grid grid-cols-1 gap-5">
			<div class="form-control">
				<input
					class={errors.bookTitle ? 'input input-error' : 'input'}
					type="text"
					placeholder="Наслов на книгата"
					bind:value={fields.newBookTitle}
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
					bind:value={fields.newBookAuthor}
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
					placeholder="Страни на книгата"
					bind:value={fields.newBookPages}
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
					placeholder="Прочитани страни на книгата"
					bind:value={fields.newBookPagesRead}
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
		</form>
		<div class="modal-action">
			<label for={bookID} class="btn">Не</label>
			<label for={bookID} on:click={submitHandler} class="btn btn-secondary">Променете</label>
		</div>
	</div>
</div>
