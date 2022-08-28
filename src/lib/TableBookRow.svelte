<script>
	export let bookTitle, bookAuthor, bookPages, bookPagesRead, bookID;
	import removeBook from './utils/removeBook';
</script>

<tr>
	<td class="bg-base-300">
		<label>
			<input
				type="checkbox"
				class="checkbox checkbox-primary"
				checked={bookPages === bookPagesRead ? true : false}
			/>
		</label>
	</td>
	<td class="bg-base-300">{bookTitle}</td>
	<td class="bg-base-300">{bookAuthor}</td>
	<td class="bg-base-300">{bookPages}</td>
	<td class="bg-base-300">{bookPagesRead}</td>
	<td class="bg-base-300"
		><progress
			class="progress progress-primary"
			value={(bookPagesRead / bookPages) * 100}
			max="100"
		/></td
	>
	<td class="bg-base-300"
		><button class="btn btn-sm btn-primary text-center"
			><img src="/media/icons/pencil-white.svg" alt="Избриши ја книгата" /></button
		></td
	>
	<td class="bg-base-300"
		><button on:click={() => removeBook(bookID)} class="btn btn-sm btn-secondary"
			><img src="/media/icons/trash-white.svg" alt="Избриши ја книгата" /></button
		></td
	>
</tr>
