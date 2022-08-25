<script>
	import removeHandler from './utils/removeBooks';
</script>

<input type="checkbox" id="modal-remove" class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg text-secondary">Избриши ги сите книги</h3>
		<p class="py-4">Дали сте сигурни дека сакате да ги избришете сите книги?</p>
		<div class="modal-action">
			<label for="modal-remove" class="btn">Не</label>
			<label for="modal-remove" class="btn btn-secondary" on:click={removeHandler}>Избриши</label>
		</div>
	</div>
</div>
