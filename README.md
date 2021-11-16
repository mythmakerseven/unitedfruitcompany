# unitedfruitcompany.com

This is the frontend code for an upcoming educational site about the United Fruit Company.

The content of the site was created by the HIS 394 and HNR 331 combination class in Spring 2020, proctored by Dr. Jonathan T. Reynolds.

This frontend is developed by Camden Mecklem using Next.js and the Wordpress API.

## Notes to self

* use styled components instead of Next.js's crappy style system (currently [bugged](https://github.com/vercel/next.js/issues/7322#issuecomment-968858477), will switch after it's fixed)
* use Next.js's `Image` component for all images to save bandwidth
* there's a lot of code duplication between the different resource paths, but I expect them to diverge as each post type will have a different presentation

## Commands

* `npm run dev` runs a live development build
* `npm run lint` checks the code for potential issues
* `npm run clearcache` clears the cached posts, causing Next.js to fetch fresh content from Wordpress on the next build
* `npm run build` builds a production version of the site
* `npm start` starts the production version