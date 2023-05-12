<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkUser.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Constructor',
            url: '#constructor',
            sublinks: [{ title: 'constructor', url: '#constructor' }]
        },
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [
                { title: 'follows', url: '#follows' },
                { title: 'ndk', url: '#ndk' },
                { title: 'npub', url: '#npub' },
                { title: 'profile', url: '#profile' },
                { title: 'relayUrls', url: '#relayUrls' }
            ]
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'fetchProfile', url: '#fetchProfile' },
                { title: 'hexpubkey', url: '#hexpubkey' },
                { title: 'relayList', url: '#relayList' },
                { title: 'fromNip05', url: '#fromNip05' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
