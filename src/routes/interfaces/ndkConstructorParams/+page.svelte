<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkConstructorParams.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [
                { title: 'cacheAdapter', url: '#cacheAdapter' },
                { title: 'debug', url: '#debug' },
                { title: 'devWriteRelayUrls', url: '#devWriteRelayUrls' },
                { title: 'explicityRelayUrls', url: '#explicityRelayUrls' },
                { title: 'signer', url: '#signer' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
