<script lang="ts">
    export let links: App.NavLink[];
</script>

<div
    id="tableOfContents"
    class="min-w-fit hidden text-sm lg:text-base md:flex flex-col gap-1 sticky top-20 py-4 ml-8 px-8 h-fit max-h-[87vh] overflow-y-scroll border-l border-zinc-200"
>
    {#each links as link}
        <a class="tableOfContentsLink font-bold" href={link.url}>{link.title}</a>
        {#if link.sublinks}
            {#each link.sublinks as sublink}
                <a class="ml-6 tableOfContentsLink" href={sublink.url}>{sublink.title}</a>
            {/each}
        {/if}
    {/each}
</div>
