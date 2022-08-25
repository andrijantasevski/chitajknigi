<script>
	import '../app.css';
	import MetaTags from '../lib/MetaTags.svelte';
	import Favicon from '../lib/Favicon.svelte';
	import Header from '../lib/Header.svelte';
	import AddBookForm from '../lib/AddBookForm.svelte';
	import ReadBooksSection from '../lib/ReadBooksSection.svelte';
</script>

<MetaTags />
<Favicon />
<Header />
<main>
	<AddBookForm />
	<ReadBooksSection />
</main>
