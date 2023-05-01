<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import GithubIcon from '$lib/elements/icons/Github.svelte';
</script>

<div
    class="footer px-8 py-4 md:py-3 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-zinc-400/20"
>
    <div class="flex flex-col md:flex-row justify-center items-center gap-4">
        <a href="https://github.com/nostr-dev-kit/ndk" target="_blank" class="w-6 h-6">
            <GithubIcon
                klass="text-[#24292f] dark:text-white w-6 h-6 hover:text-zinc-600 dark:hover:text-zinc-400"
            />
        </a>
        <span class="text-center md:text-left"
            >Proudly free and open source software under the
            <a href="https://en.wikipedia.org/wiki/MIT_License" class="underline" target="_blank"
                >MIT License</a
            ></span
        >
    </div>
    <DonateButton classes="text-sm" />
</div>
