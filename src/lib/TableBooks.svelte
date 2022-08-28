<script>
	import TableBookRow from './TableBookRow.svelte';
	import { booksStore } from './utils/booksStore';

	let booksData;
	booksStore.subscribe((data) => (booksData = data));
</script>

<section class="overflow-x-auto w-11/12 mx-auto mb-10">
	<h2 class="text-2xl mb-6">Статистика за вашите книги</h2>
	<table class="table w-full rounded-xl">
		<thead>
			<tr>
				<th class="bg-base-300">
					<label>
						<input type="checkbox" class="checkbox" disabled />
					</label>
				</th>
				<th class="bg-base-300">Наслов на книгата</th>
				<th class="bg-base-300">Автор на книгата</th>
				<th class="bg-base-300">Страни на книгата</th>
				<th class="bg-base-300">На страна</th>
				<th class="bg-base-300">Прогрес</th>
				<th class="bg-base-300">Изменете</th>
				<th class="bg-base-300">Избришете</th>
			</tr>
		</thead>
		<tbody>
			{#if booksData.length === 0}
				<tr>
					<td class="bg-base-300 text-center" colspan="8">
						<div class="flex flex-col items-center">
							<lottie-player
								src="/media/lottie/cat-sleeping.json"
								background="transparent"
								speed="1"
								style="width: 200px; height: 200px;"
								loop
								autoplay
							/>
							<p class="text-lg text-center mb-4">Сеуште не сте внесиле книга.</p>
						</div>
					</td>
				</tr>
			{:else}
				{#each booksData as book}
					<TableBookRow
						bookTitle={book.bookTitle}
						bookAuthor={book.bookAuthor}
						bookPages={book.bookPages}
						bookPagesRead={book.bookPagesRead}
						bookID={book.bookID}
					/>
				{/each}
			{/if}
		</tbody>
	</table>
</section>
