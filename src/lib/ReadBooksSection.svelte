<script>
	import ReadBookSingle from './ReadBookSingle.svelte';

	import { booksStore, booksRead } from './utils/booksStore';

	let booksData;
	let booksReadData;

	booksStore.subscribe((data) => (booksData = data));
	booksRead.subscribe((data) => (booksReadData = data));
</script>

<section class="w-11/12 mx-auto bg-base-300 p-6 lg:p-8 mb-10 rounded-xl">
	<h2 class={booksData.length === 0 ? 'text-2xl mb-0' : 'text-2xl mb-6'}>Прочитани книги</h2>

	{#if booksData.length === 0 || booksReadData.length === 0}
		<div class="flex flex-col items-center">
			<lottie-player
				src="/media/lottie/cat-sleeping.json"
				background="transparent"
				speed="1"
				style="width: 200px; height: 200px;"
				loop
				autoplay
			/>
			<p class="text-lg text-center mb-4">Сеуште не сте прочитале книга.</p>
		</div>
	{:else}
		{#each booksData as book, i (book)}
			{#if +book.bookPages === +book.bookPagesRead}
				<ReadBookSingle bookTitle={book.bookTitle} bookAuthor={book.bookAuthor} />
			{/if}
		{/each}
	{/if}
</section>
