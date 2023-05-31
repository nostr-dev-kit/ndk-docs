<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkSubscriptionOptions.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [
                { title: 'cacheUsage', url: '#cacheUsage' },
                { title: 'closeOnEose', url: '#closeOnEose' },
                { title: 'groupable', url: '#groupable' },
                { title: 'groupableDelay', url: '#groupableDelay' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
