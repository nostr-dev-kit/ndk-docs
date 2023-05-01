import ghpages from 'gh-pages';

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/nostr-dev-kit/ndk-docs.git',
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
