# unitedfruitcompany.com

This is the frontend code for an educational site about the United Fruit Company.

The content of the site was created by the HIS 394 and HNR 331 combination class in Spring 2020, proctored by Dr. Jonathan T. Reynolds.

This frontend is developed by Camden Mecklem using Next.js and the Wordpress API.

## Adding stuff

If you want to add a post, follow the guide in [ADDING_POSTS.md](/ADDING_POSTS.md). Also check out the additional information in [CONTRIBUTING_NONCODE.md](/CONTRIBUTING_NONCODE.md).

If you're a developer, [CONTRIBUTING_CODE.md](/CONTRIBUTING_CODE.md) will get you started, along with the documentation below.

## Development notes

* Don't use Next.js's `Image` component. Instead, host images on Wordpress. Wordpress does its own optimization if you append a width param to the URL, such as `wordpress.com/example.png?w=600`. This serves the image as webp, and scales it if the width value is smaller than the original width.

## Commands

* `npm run dev` runs a live development build
* `npm run lint` checks the code for potential issues
* `npm run clearcache` clears the cached posts, causing Next.js to fetch fresh content from Wordpress on the next build
* `npm run build` builds a production version of the site
* `npm start` starts the production version

## Components

Reusable React components are stored in the `/components` folder.

* `AudioSecret`: Wrap any HTML inside this and it'll play "Look at me! I'm a banana!" in Morse code when you click on it. Yeah.
* `Banner`: Designed to appear on text/resource pages just above the content for an easy way to navigate between content or return to the root menu
* `Container`: Generic mobile-aware container div
* `Footer`: The footer that appears at the bottom of every page (this should only be used in `/pages/_app.tsx`)
* `Hero`: Displays a picture, header, and text in an appealing, full-width div. Mainly used on the homepage.
* `HomeGrid`: The navigation grid that appears on the homepage. This could be more generic but it works for now.
* `Image`: A special image component that fades into view when it finishes loading. It takes a source URL and alt text as props.
* `Navbar`: The navbar, pretty self-explanatory.
* `NavOffset`: All it does is use a bit of logic to determine whether to include a `margin-top` property depending on whether we want the navbar to overlap the content or not. Everything is wrapped in this component in `/pages/_app.tsx`.
* `PagePicker`: Provides a nice menu to navigate between pages in a paginated post list. For props it requires the number of pages and a `setPage` callback.
* `Post`: Displays the contents of a text post, with some simple logic for handling featured images.
* `PostCard`: A card that takes a post object as a prop, and displays the title and featured image. Intended to be used to list text-based posts, e.g. on the `/biographies` page.
* `PostList`: Given an array of posts, `PostList` spits out a header, a bunch of `PostCard`s, and a `SearchPane` with tag suggestions.
* `PostTimeline`: Displays posts in a full-height, slideshow style, used on the Timeline page of the site.
* `Resource`: A bibliography display that takes citation information as props and turns it into a simple card. Not currently used, will be either removed or heavily redesigned in the future.
* `ResourceDisplay`: A gallery-style display for resources (i.e. images and PDFs). Still under development.
* `SearchPane`: Allows the user to search for posts, providing both a desktop and mobile version. It requires filter logic to reside in its parent component--it just passes up the query.
* `TypewriterScript`: Takes plain text as a prop, splits each letter in a `<span>` with 0 opacity, and changes each letter's opacity to 1 at a semi-random interval to simulate typing (typewriter font recommended). The span solution guarantees no content-shifting issues. You can wrap it in whatever HTML element you want (p, h1, etc.).

## Hooks

Custom hooks are stored in the `/hooks` folder.

* `usePageQuery`: Given a category and a list of initial/placeholder posts, this hook keeps track of the `page` query parameter in the URL and fetches posts accordingly.
* `useScreenHeight`: iOS messes up its window.innerHeight calculation when the URL bar is expanded. This hook will check if the user is on iOS and provide the alternative screen.height value instead. It will return window.innerheight for any other device.