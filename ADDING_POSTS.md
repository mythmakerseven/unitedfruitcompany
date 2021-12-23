# How to add posts

This guide is intended for people who want to add posts to the site. There are certain things the site expects from each type of post, so let's go through one by one.

If anything here is unclear, you can explore the existing posts to see how they're set up.

## Articles

### Category

Articles must be in the "Articles" category in Wordpress, or else they won't show up on the site.

### Featured image

Your article should include an image related to the article. If you're having trouble finding something, it's okay if it's not super relevant, as long as it's vaguely related to the topic.

![screenshot of the Wordpress featured image setting](/docs/article_featured_image.png)

### Label tags

You should also add tags for some of the concepts, places, and people mentioned in the article.

### Date tags

To make the bio appear in the Timeline, it needs to have relevant date ranges added as tags. They need to be exactly in this format: `1955-1965` with two four-digit years separated by a hyphen.

When you're finished adding tags, they should look something like this:

![screenshot of the tags menu on an article post](/docs/article_tags.png)

## Biographies

### Category

Biographies must be in the "Biographies" category in Wordpress, or else they won't show up on the site.

### Featured image

A biography should include a picture of the person, attached as a "Featured Image":

![screenshot of the Wordpress featured image setting](/docs/bio_featured_image.png)

### Label tags

You should also add tags for some of the concepts, places, and people mentioned in the bio.

### Date tags

To make the bio appear in the Timeline, it needs to have relevant date ranges added as tags. They need to be exactly in this format: `1955-1965` with two four-digit years separated by a hyphen.

When you're finished adding tags, they should look something like this:

![screenshot of the tags menu on a biography post](/docs/bio_tags.png)

## Documents

### Category

Documents must be in the "Documents" category in Wordpress, or else they won't show up on the site.

### Featured image

You must include a screenshot of the document as the Wordpress featured image. See below:

![screenshot of the Wordpress featured image setting](/docs/document_featured_image.png)

### Label Tags

Tags are especially important for documents, because the search function can't do a full-text search of the document. Make sure to thoroughly tag your post with as many relevant tags as you can think of.

### Date tags

Also make sure to add the date range that the document belongs in. For example, a document from 1933 should have the `1930-1935` tag.

When you're finished adding tags, they should look something like this:

![screenshot of the tags menu on a document post](/docs/document_tags.png)

## Photos

Unfortunately, on this first iteration of the site, we didn't have reproduction rights to enough images to justify a photos section. The good news is that it would be easy to create if there's a programmer in the class. The Documents components work exactly the same way as Photo components would, so your programmer could just copy/paste a lot of the code from the Documents section to create an image section. If your class is going that route, students adding photos should follow the same rules that are outlined in the Documents section of this page.

## Resources/Bibliography

This is the one category that doesn't expect a featured image. Lucky you!

The category must be set to "Bibliography"--not resources!

For the title of your post, put something that makes it easy for you to find later on Wordpress (preferably the title of your source). The website ignores the title.

You should include a Chicago-style citation of the source. Don't worry about indentation--the site takes care of that. Since this is a website, you should make all effort you can to include a link to the source, even if it's just a link to a library listing or a paywalled archive.

Finally, go to the tags list and add one tag to specify what type of source it is. The valid options are:

* book
* periodical
* picture
* website
* video

This tag tells the website which icon to use on https://unitedfruitcompany.com/resources and helps users sort through the different types of materials.

Here is an example of how a bibliography post should look:

![screenshot of how a bibliography post should look](/docs/bibliography_post.png)

## Timeline

The timeline is pretty set in stone, but if you end up adding another date range, just make sure to 1) include a featured image, 2) keep the date in the `1955-1965` format, and 3) put it in the Timeline category.
