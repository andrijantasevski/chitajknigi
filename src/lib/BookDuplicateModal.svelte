<script>
	import { bookDuplicateStore } from './utils/booksStore';

	function closeHandler() {
		bookDuplicateStore.update((data) => (data = ''));
	}
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" checked />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg text-error">Книгата е веќе внесена.</h3>
		<p class="py-4">
			Оваа книга веќе <span class="text-error">не можете</span> да је внесувате. Ве молиме внесете нов
			наслов.
		</p>
		<div class="modal-action">
			<label for="my-modal" class="btn" on:click={closeHandler}>Во ред</label>
		</div>
	</div>
</div>
