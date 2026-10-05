<script lang="ts">
	import type { Snippet } from 'svelte';

	export type StatPayload = {
		template: string;
	};

	let {
		children,
		preferred,
		grow = false
	}: {
		children: Snippet;
		preferred?: Snippet;
		grow?: boolean;
	} = $props();
</script>

<div class={['root', grow && 'grow']}>
	<div class="content">
		{@render children()}
	</div>
	{#if preferred}
		<div class="content preferred-size-container" aria-hidden="true">
			{@render preferred()}
		</div>
	{/if}
</div>

<style>
	.root {
		display: grid;
		height: 100%;

		/* Debug */
		border: 1px dashed blue;
	}

	.grow {
		flex: 1 1 auto;
	}

	.content {
		grid-area: 1 / 1;
		display: flex;
		align-items: center;
	}

	.preferred-size-container {
		visibility: hidden;
		pointer-events: none;
	}
</style>
