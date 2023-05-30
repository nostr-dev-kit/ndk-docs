<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkRelaySet.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Constructor',
            url: '#constructor',
            sublinks: [{ title: 'constructor', url: '#constructor' }]
        },
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [{ title: 'relays', url: '#relays' }]
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'getId', url: '#getId' },
                { title: 'publish', url: '#publish' },
                { title: 'size', url: '#size' },
                { title: 'subscribe', url: '#subscribe' },
                { title: 'fromRelayUrls', url: '#fromRelayUrls' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
