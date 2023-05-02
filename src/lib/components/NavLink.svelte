<script lang="ts">
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';
    import { base } from '$app/paths';

    const dispatch = createEventDispatcher();

    export let href: string;
    export let linkText: string;

    function navLinkClick(event: Event) {
        dispatch('navLinkClicked', event.target);
    }
</script>

<a
    href="{base}{href}"
    data-sveltekit-preload-data="tap"
    class:active={$page.url.pathname.match(`${href}$`)}
    on:click={navLinkClick}
>
    {linkText}
</a>
