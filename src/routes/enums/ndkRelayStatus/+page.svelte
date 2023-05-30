<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkRelayStatus.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Members',
            url: '#Members'
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
