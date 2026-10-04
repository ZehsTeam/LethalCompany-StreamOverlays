<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { setOverlayState } from '$lib/OverlayState.svelte';

	let { children } = $props();

	setOverlayState();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
