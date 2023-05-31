<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkCacheAdapter.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [{ title: 'locking', url: '#locking' }]
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'query', url: '#query' },
                { title: 'setEvent', url: '#setEvent' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
