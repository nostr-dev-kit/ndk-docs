<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkSigner.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'blockUntilReady', url: '#blockUntilReady' },
                { title: 'decrypt', url: '#decrypt' },
                { title: 'encrypt', url: '#encrypt' },
                { title: 'sign', url: '#sign' },
                { title: 'user', url: '#user' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
