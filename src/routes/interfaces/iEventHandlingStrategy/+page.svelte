<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './iEventHandlingStrategy.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [{ title: 'handle', url: '#handle' }]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
