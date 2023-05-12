<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './getUserParams.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#properties',
            sublinks: [
                { title: 'hexpubkey', url: '#hexpubkey' },
                { title: 'nip05', url: '#nip05' },
                { title: 'npub', url: '#npub' },
                { title: 'relayUrls', url: '#relayUrls' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
