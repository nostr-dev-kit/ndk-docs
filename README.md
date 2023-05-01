# NDK Docs

This is the repository for the documentation that ~~lives~~ will live at [ndk.fyi](https://ndk.fyi).

## What is NDK?

NDK (Nostr Development Kit) is a tool kit for building Nostr apps. It abstracts much of the complexity away and is built to help maintain and encourage Nostr's decentralized nature.

## Running the app locally

1. Clone this repo `git clone git@github.com:nostr-dev-kit/ndk-docs.git`
1. Change into the directory `cd ndk-docs`
1. Install dependencies `npm i`
1. Run the server `npm run dev`

## Contributing

### A few caveats

1. NDK is still under heavy development. Expect these docs to change regularly.
1. These docs will remain english only for the foreseeable future. While translations would be great (and we'll get there in the future), for now we'll focus on making sure we have a single _complete_ set of documentation.
1. This site is built with the [Svelte](https://svelte.dev) framework using typescript.

### What can you do?

1. First and foremost we need to get a v1 in place. There are _sort of_ docs [here](https://github.com/nostr-dev-kit/ndk/tree/master/docs). They are auto-generated and thus, cannot be trusted.
1. We need to build out docs pages for all the major [classes](https://github.com/nostr-dev-kit/ndk/tree/master/docs/classes), [enums](https://github.com/nostr-dev-kit/ndk/tree/master/docs/enums), and [interfaces](https://github.com/nostr-dev-kit/ndk/tree/master/docs/interfaces) in NDK.

### How to create/edit pages

Svelte page routing is dependent on folder structure. Any folder under the `/src/routes/` directory will generate a route and Svelte will look for a `+page.svelte` file in each of those directories to know what to render.

There is a reference page for `NDKEvent` in this repo already `/src/routes/classes/ndkEvent/`. Pages are generated from two different files.

1. `+page.svelte` file is where you define the table of contents links. You'll need to update three things for new pages.

    1. The filename of the `.svx` file. e.g. From `ndkEvent.svx` to `ndkUserProfile.svx`
    1. The import statement. e.g. if you copy `+page.svelte` and `ndkEvent.svx` from `/src/routes/ndkEvent/` to a new directory at `/src/routes/ndkUserProfile`, you'll need to change:

    ```js
    import MarkdownContent from './ndkEvent.svx';
    ```

    to

    ```js
    import MarkdownContent from './ndkUserProfile.svx';
    ```

    1. The `tableOfContents` variable. This variable generates the secondary nav on the right side of the page. The values should be formatted based on the section titles on the page (see more on the `SectionHeader` component below). e.g. If you have an `h2` section header on the page called "Create a user", the `tableOfContents` variable should be `{title: "Create a user", url: "#create-a-user"}`.

1. `ndk<NDKClassName>.svx` file is a hybrid Svelte + Markdown file where the main page contents live. Aside from copying/writing the content for the page in markdown, you'll need to make sure `h2` and `h3` headings are set correctly so that the secondary nav works properly.

    1. `h2` and `h3` headers in the `.svx` file should be declared with this component instead of using the standard markdown `##` and `###` prefixes. NB: Use Markdown (`#`) for the single `h1` page title at the top of the page.

    ```svelte
    // For h2 headers
    <SectionHeader title="The section title" />

    // For h3 subheaders
    <SectionHeader title="The sub-section title" subheader={true} />
    ```

1. Lastly, once you're page is ready, add it to the `navLinks` variable at the top of the `/src/components/Sidebar.svelte` file.

### Editing & Fact Checking

Because NDK is still under heavy development, you're **guaranteed** to find things that are incorrect in the generated docs that currently exist. Read those with a critical eye and surface any questions or confusions in Github issues on this repo.
