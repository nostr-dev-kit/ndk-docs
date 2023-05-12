<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkNip46Backend.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Constructor',
            url: '#constructor',
            sublinks: [{ title: 'constructor', url: '#constructor' }]
        },
        {
            title: 'Properties',
            url: '#properties',
            sublinks: [
                { title: 'debug', url: '#debug' },
                { title: 'handlers', url: '#handlers' },
                { title: 'localUser', url: '#localUser' },
                { title: 'ndk', url: '#ndk' }
            ]
        },
        {
            title: 'Methods',
            url: '#methods',
            sublinks: [
                { title: 'pubkeyAllowed', url: '#pubkeyAllowed' },
                { title: 'setStrategy', url: '#setStrategy' },
                { title: 'signEvent', url: '#signEvent' },
                { title: 'start', url: '#start' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
