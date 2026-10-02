<script lang="ts">
	import Crew from "$lib/components/Crew.svelte";
</script>

<div class="overlay">
    <Crew playerCount={1} />
    <Crew playerCount={99} grow={true} />
    <Crew playerCount={4} />
</div>

<style>
    .overlay {
        height: 75px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 40px;

        /* Debug */
        border: 1px dashed red;
    }
</style>
