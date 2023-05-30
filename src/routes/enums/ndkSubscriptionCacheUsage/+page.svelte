<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkSubscriptionCacheUsage.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Members',
            url: '#Members',
            sublinks: [
                { title: 'ONLY_CACHE', url: '#ONLY_CACHE' },
                { title: 'CACHE_FIRST', url: '#CACHE_FIRST' },
                { title: 'PARALLEL', url: '#PARALLEL' },
                { title: 'ONLY_RELAY', url: '#ONLY_RELAY' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
