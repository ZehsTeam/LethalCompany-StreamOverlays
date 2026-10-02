<script lang="ts">
	let {
		playerCount,
		grow = false
	}: {
		playerCount: number;
		grow?: boolean;
	} = $props();
</script>

<div class="root {grow ? 'grow' : ''}">
	<div class="content">
		<p>Crew: {playerCount}</p>
	</div>
	<div class="content preferred-size-container">
		<p>Crew: 99</p>
	</div>
</div>

<style>
	.root {
		height: 100%;
		display: flex;
		flex-direction: column;

		/* Debug */
		border: 1px dashed blue;
	}

	.grow {
		flex: 1 1 auto;
	}

	.content {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.preferred-size-container {
		height: 0 !important;
		visibility: hidden;
	}
</style>
