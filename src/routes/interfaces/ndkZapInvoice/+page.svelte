<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkZapInvoice.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [
                { title: 'amount', url: '#amount' },
                { title: 'comment', url: '#comment' },
                { title: 'id', url: '#id' },
                { title: 'zapped', url: '#zapped' },
                { title: 'zappedEvent', url: '#zappedEvent' },
                { title: 'zappee', url: '#zappee' },
                { title: 'zapper', url: '#zapper' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
