<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkUser.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#properties',
            sublinks: [
                { title: 'content', url: '#content' },
                { title: 'created_at', url: '#created_at' }
            ]
        },
        { title: 'Methods', url: '#methods' }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
