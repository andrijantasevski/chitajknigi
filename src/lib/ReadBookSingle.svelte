<script>
	export let bookTitle, bookAuthor, bookID;

	import removeBook from './utils/removeBook';
</script>

<div class="bg-base-100 p-4 mb-6 rounded-xl flex items-center md:justify-between gap-x-4 last:mb-0">
	<div class="flex items-center gap-x-4">
		<input type="checkbox" class="checkbox checkbox-primary" checked="true" />
		<p>
			<span class="font-semibold">{bookTitle}</span> од
			<span class="font-semibold">{bookAuthor}</span>
		</p>
	</div>

	<button on:click={() => removeBook(bookID)} class="btn btn-sm btn-secondary"
		><img src="/media/icons/trash-white.svg" alt="Избриши ја книгата" /></button
	>
</div>
