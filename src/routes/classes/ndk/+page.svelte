<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndk.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#properties',
            sublinks: [
                { title: 'cacheAdapter', url: '#cacheAdapter' },
                { title: 'debug', url: '#debug' },
                { title: 'explicitRelayUrls', url: '#explicitRelayUrls' },
                { title: 'pool', url: '#pool' },
                { title: 'signer', url: '#signer' }
            ]
        },
        {
            title: 'Methods',
            url: '#methods',
            sublinks: [
                { title: 'constructor', url: '#constructor' },
                { title: 'assertSigner', url: '#assertSigner' },
                { title: 'connect', url: '#connect' },
                { title: 'fetchEvent', url: '#fetchEvent' },
                { title: 'fetchEvents', url: '#fetchEvents' },
                { title: 'getUser', url: '#getUser' },
                { title: 'publish', url: '#publish' },
                { title: 'subscribe', url: '#subscribe' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
