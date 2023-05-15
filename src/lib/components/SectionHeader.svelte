<script lang="ts">
    import LinkIcon from '$lib/elements/icons/Link.svelte';

    export let title: string;
    export let subheader: boolean = false;

    const stringified: string = title.split(' ').join('-');
</script>

{#if subheader}
    <h3 id={stringified} class="sectionHeader">
        <a href={`#${stringified}`} class="linkIcon hidden"><LinkIcon /></a>
        {title}
    </h3>
{:else}
    <h2 id={stringified} class="sectionHeader">
        <a href={`#${stringified}`} class="linkIcon hidden"><LinkIcon /></a>
        {title}
    </h2>
{/if}
