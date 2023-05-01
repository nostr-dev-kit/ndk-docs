<script lang="ts">
    import LinkIcon from '$lib/elements/icons/Link.svelte';

    export let title: string;
    export let subheader: boolean = false;

    const stringified: string = title.split(' ').join('-').toLowerCase();
</script>

{#if subheader}
    <h3 id={stringified} class="sectionHeader flex flex-row gap-2 items-center scroll-mt-20">
        <a href={`#${stringified}`}><LinkIcon /></a>
        {title}
    </h3>
{:else}
    <h2 id={stringified} class="sectionHeader flex flex-row gap-2 items-center scroll-mt-20">
        <a href={`#${stringified}`}><LinkIcon /></a>
        {title}
    </h2>
{/if}
