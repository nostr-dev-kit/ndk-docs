<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkEvent.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#properties',
            sublinks: [
                { title: 'content', url: '#content' },
                { title: 'created_at', url: '#created_at' },
                { title: 'id', url: '#id' },
                { title: 'kind', url: '#kind' },
                { title: 'pubkey', url: '#pubkey' },
                { title: 'sig', url: '#sig' },
                { title: 'subject', url: '#subject' },
                { title: 'tags', url: '#tags' }
            ]
        },
        { title: 'Methods', url: '#methods' }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
