<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkRelay.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Constructor',
            url: '#constructor',
            sublinks: [{ title: 'constructor', url: '#constructor' }]
        },
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [
                { title: 'activeSubscriptions', url: '#activeSubscriptions' },
                { title: 'complaining', url: '#complaining' },
                { title: 'scores', url: '#scores' },
                { title: 'url', url: '#pool' }
            ]
        },
        {
            title: 'Accessors',
            url: '#accessors',
            sublinks: [
                { title: 'connectionStats', url: '#connectionStats' },
                { title: 'status', url: '#status' }
            ]
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'connect', url: '#connect' },
                { title: 'disconnect', url: '#disconnect' },
                { title: 'handleNotice', url: '#handleNotice' },
                { title: 'publish', url: '#publish' },
                { title: 'scoreSlowerEvent', url: '#scoreSlowerEvent' },
                { title: 'subscribe', url: '#subscribe' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
