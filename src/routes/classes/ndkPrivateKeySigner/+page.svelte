<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkPrivateKeySigner.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Constructor',
            url: '#constructor',
            sublinks: [{ title: 'constructor', url: '#constructor' }]
        },
        {
            title: 'Properties',
            url: '#Properties',
            sublinks: [{ title: 'privateKey', url: '#privateKey' }]
        },
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'blockUntilReady', url: '#blockUntilReady' },
                { title: 'decrypt', url: '#decrypt' },
                { title: 'encrypt', url: '#encrypt' },
                { title: 'sign', url: '#sign' },
                { title: 'user', url: '#user' },
                { title: 'generate', url: '#generate' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
