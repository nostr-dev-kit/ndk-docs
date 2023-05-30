<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkEvent.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Constructor',
            url: '#Constructor',
            sublinks: [{ title: 'constructor', url: '#constructor' }]
        },
        {
            title: 'Properties',
            url: '#Properties',
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
        {
            title: 'Methods',
            url: '#Methods',
            sublinks: [
                { title: 'rawEvent', url: '#rawEvent' },
                { title: 'toNostrEvent', url: '#toNostrEvent' },
                { title: 'isReplaceable', url: '#isReplaceable' },
                { title: 'isParamReplaceable', url: '#isParamReplaceable' },
                { title: 'encode', url: '#encode' },
                { title: 'encrypt', url: '#encrypt' },
                { title: 'decrypt', url: '#decrypt' },
                { title: 'getMatchingTags', url: '#getMatchingTags' },
                { title: 'sign', url: '#sign' },
                { title: 'publish', url: '#publish' },
                { title: 'replaceableDTag', url: '#replaceableDTag' },
                { title: 'tagId', url: '#tagId' },
                { title: 'tagReference', url: '#tagReference' },
                { title: 'zap', url: '#zap' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
