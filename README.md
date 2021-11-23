# unitedfruitcompany.com

This is the frontend code for an upcoming educational site about the United Fruit Company.

The content of the site was created by the HIS 394 and HNR 331 combination class in Spring 2020, proctored by Dr. Jonathan T. Reynolds.

This frontend is developed by Camden Mecklem using Next.js and the Wordpress API.

## Development notes

* Use Next.js's `Image` component wherever possible to save bandwidth. However, images uploaded to Wordpress, such as the portraits in biography pages, do not consume Vercel bandwidth.
* There's a lot of code duplication between the different resource paths, but I expect them to diverge as each post type will have a different presentation.
* Investigate using the `thumbnail` field on WP post objects to save users' bandwidth on post listing pages.

## Commands

* `npm run dev` runs a live development build
* `npm run lint` checks the code for potential issues
* `npm run clearcache` clears the cached posts, causing Next.js to fetch fresh content from Wordpress on the next build
* `npm run build` builds a production version of the site
* `npm start` starts the production version

## Components

Reusable React components are stored in the `/components` folder.

* `AudioSecret`: 😀
* `Banner`: Designed to appear on text/resource pages just above the content for an easy way to navigate between content or return to the root menu
* `Container`: Generic mobile-aware container div
* `Footer`: The footer that appears at the bottom of every page (this should only be used in `/pages/_app.tsx`)
* `Hero`: Displays a picture, header, and text in an appealing, full-width div. Mainly used on the homepage.
* `HomeGrid`: The navigation grid that appears on the homepage. This could be more generic but it works for now.
* `Navbar`: The navbar, pretty self-explanatory.
* `NavOffset`: All it does is use a bit of logic to determine whether to include a `margin-top` property depending on whether we want the navbar to overlap the content or not. Everything is wrapped in this component in `/pages/_app.tsx`.
* `Post`: Displays the contents of a text post, with some simple logic for handling featured images.
* `PostCard`: A card that takes a post object as a prop, and displays the title and featured image. Intended to be used to list text-based posts, e.g. on the `/bios` page.
* `Resource`: A bibliography display that takes citation information as props and turns it into a simple card. Not currently used, will be either removed or heavily redesigned in the future.
* `ResourceDisplay`: A gallery-style display for resources (i.e. images and PDFs). Still under development.
* `TypewriterScript`: Takes plain text as a prop, splits each letter in a `<span>` with 0 opacity, and changes each letter's opacity to 1 at a semi-random interval to simulate typing (typewriter font recommended). The span solution guarantees no content-shifting issues. You can wrap it in whatever HTML element you want (p, h1, etc.).