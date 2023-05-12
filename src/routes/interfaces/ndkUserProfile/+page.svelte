<script lang="ts">
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import MarkdownContent from './ndkUserProfile.svx';

    let tableOfContents: App.NavLink[] = [
        {
            title: 'Properties',
            url: '#properties',
            sublinks: [
                { title: 'about', url: '#about' },
                { title: 'banner', url: '#banner' },
                { title: 'bio', url: '#bio' },
                { title: 'displayName', url: '#displayName' },
                { title: 'image', url: '#image' },
                { title: 'lud06', url: '#lud06' },
                { title: 'lud16', url: '#lud16' },
                { title: 'name', url: '#name' },
                { title: 'nip05', url: '#nip05' },
                { title: 'zapService', url: '#zapService' }
            ]
        }
    ];
</script>

<div class="contentWrapper">
    <MarkdownContent />
</div>

<TableOfContents links={tableOfContents} />
