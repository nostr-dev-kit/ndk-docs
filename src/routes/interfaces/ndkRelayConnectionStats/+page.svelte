<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkRelayConnectionStats.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [
                { title: 'attempts', url: '#attempts' },
                { title: 'connectedAt', url: '#connectedAt' },
                { title: 'durations', url: '#durations' },
                { title: 'success', url: '#success' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
