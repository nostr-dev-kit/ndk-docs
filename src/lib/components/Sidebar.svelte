<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import NavLink from '$lib/components/NavLink.svelte';
    import { base } from '$app/paths';

    const navLinks = {
        classes: [
            { href: '/classes/ndk', linkText: 'NDK' },
            { href: '/classes/ndkEvent', linkText: 'NDKEvent' },
            { href: '/classes/ndkNip07Signer', linkText: 'NDKNip07Signer' },
            { href: '/classes/ndkNip46Backend', linkText: 'NDKNip46Backend' },
            { href: '/classes/ndkNip46Signer', linkText: 'NDKNip46Signer' },
            { href: '/classes/ndkPrivateKeySigner', linkText: 'NDKPrivateKeySigner' },
            { href: '/classes/ndkRelay', linkText: 'NDKRelay' },
            { href: '/classes/ndkRelaySet', linkText: 'NDKRelaySet' },
            { href: '/classes/ndkSubscription', linkText: 'NDKSubscription' },
            { href: '/classes/ndkSubscriptionGroup', linkText: 'NDKSubscriptionGroup' },
            { href: '/classes/ndkUser', linkText: 'NDKUser' }
        ],
        interfaces: [
            { href: '/interfaces/getUserParams', linkText: 'getUserParams' },
            { href: '/interfaces/IEventHandlingStrategy', linkText: 'IEventHandlingStrategy' },
            { href: '/interfaces/NDKCacheAdapter', linkText: 'NDKCacheAdapter' },
            { href: '/interfaces/NDKConstructorParams', linkText: 'NDKConstructorParams' },
            { href: '/interfaces/NDKFilterOptions', linkText: 'NDKFilterOptions' },
            { href: '/interfaces/NDKRelayConnectionStats', linkText: 'NDKRelayConnectionStats' },
            { href: '/interfaces/NDKSigner', linkText: 'NDKSigner' },
            { href: '/interfaces/NDKSubscriptionOptions', linkText: 'NDKSubscriptionOptions' },
            { href: '/interfaces/ndkUserProfile', linkText: 'NDKUserProfile' },
            { href: '/interfaces/NDKZapInvoice', linkText: 'NDKZapInvoice' }
        ],
        guides: [
            { href: '/', linkText: 'Getting started' },
            { href: '/guides/common-patterns', linkText: 'Common patterns' }
        ],
        pages: [{ href: 'https://nostr.how', linkText: 'What is Nostr?' }]
    };
</script>

<a href="{base}/" class="hidden md:flex flex-row gap-6 items-center text-3xl ml-4 no-underline">
    <!-- <span class="font-extrabold leading-tight gradientText">Nostr Dev Kit</span> -->
    <div class="w-1/2 text-3xl font-extrabold leading-none">
        <span class="text-[#6d0593]">N</span>ostr<br />Dev<br />Kit
    </div>
</a>

<div class="navWrapper guides md:mt-10 ml-4">
    <h2 class="mb-2 font-semibold">Guides</h2>
    <ul class="nav text-base">
        {#each navLinks.guides as link}
            <li>
                <NavLink on:navLinkClicked href={link.href} linkText={link.linkText} />
            </li>
        {/each}
    </ul>
</div>

<div class="navWrapper classes md:mt-10 ml-4">
    <h2 class="mb-2 font-semibold">Classes</h2>
    <ul class="nav text-base">
        {#each navLinks.classes as link}
            <li>
                <NavLink on:navLinkClicked href={link.href} linkText={link.linkText} />
            </li>
        {/each}
    </ul>
</div>

<div class="navWrapper classes md:mt-10 ml-4">
    <h2 class="mb-2 font-semibold">Interfaces</h2>
    <ul class="nav text-base">
        {#each navLinks.interfaces as link}
            <li>
                <NavLink on:navLinkClicked href={link.href} linkText={link.linkText} />
            </li>
        {/each}
    </ul>
</div>

<div class="navWrapper resources mt-10 mb-10 ml-4">
    <h2 class="mb-2 font-semibold">Resources</h2>
    <ul class="nav text-base">
        {#each navLinks.pages as link}
            <li>
                <NavLink on:navLinkClicked href={link.href} linkText={link.linkText} />
            </li>
        {/each}
    </ul>
</div>

<div class="flex flex-col items-center mx-auto">
    <DonateButton variant="primary" classes="text-sm" />
    <div class="colophon text-zinc-500 dark:text-zinc-400 mt-4 text-sm text-center px-8 pb-12">
        <div>Made with 💜 & ⚡ by</div>
        <a
            href="https://primal.net/pablof7z"
            target="_blank"
            class="underline hover:text-zinc-600 dark:hover:text-zinc-200">PABLOF7z</a
        >,
        <a
            href="https://primal.net/jeffg"
            target="_blank"
            class="underline hover:text-zinc-600 dark:hover:text-zinc-200">JeffG</a
        >, and
        <a
            href="https://github.com/nostr-dev-kit/ndk/graphs/contributors"
            target="_blank"
            class="underline hover:text-zinc-600 dark:hover:text-zinc-200"
            >many other contributors</a
        >.
    </div>
</div>
