<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkKind.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Members',
            url: '#Members'
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'isReplaceable', url: '#isReplaceable' },
                { title: 'isParamReplaceable', url: '#isParamReplaceable' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
