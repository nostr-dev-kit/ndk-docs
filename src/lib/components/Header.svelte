<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import GithubIcon from '$lib/elements/icons/Github.svelte';
    import MenuIcon from '$lib/elements/icons/Menu.svelte';
    import { sidebarVisible } from '$lib/stores';
</script>

<div
    class="
            header px-8 py-3 border-b
            border-zinc-400/20 dark:border-zinc-200/20
            flex flex-row justify-start gap-4 md:justify-end items-center
            backdrop-blur-sm w-full sticky top-0 z-50
            "
>
    <button on:click={() => sidebarVisible.set(!$sidebarVisible)} class="block md:hidden">
        <MenuIcon />
    </button>
    <a href="/" class="md:hidden flex flex-row gap-2 items-center text-2xl no-underline">
        <span class="font-extrabold leading-tight">NDK</span>
    </a>
    <a href="https://github.com/nostr-dev-kit/ndk" target="_blank" class="w-6 h-6">
        <GithubIcon />
    </a>
    <DonateButton variant="primary" classes="text-sm hidden md:block" />
</div>
