<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkFilterOptions.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [{ title: 'skipCache', url: '#skipCache' }]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
