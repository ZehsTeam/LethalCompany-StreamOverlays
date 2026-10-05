<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		height: 75px;
		padding: 0 30px;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		gap: 30px;

		/* Debug */
		border: 1px dashed red;
	}
</style>
