<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkSubscription.svx';

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
                { title: 'filter', url: '#filter' },
                { title: 'ndk', url: '#ndk' },
                { title: 'opts', url: '#opts' },
                { title: 'relaySet', url: '#relaySet' },
                { title: 'relaySubscriptions', url: '#relaySubscriptions' },
                { title: 'subId', url: '#subId' }
            ]
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'eoseReceived', url: '#eoseReceived' },
                { title: 'eventReceived', url: '#eventReceived' },
                { title: 'groupableId', url: '#groupableId' },
                { title: 'start', url: '#start' },
                { title: 'stop', url: '#stop' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
