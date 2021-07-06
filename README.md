# PackRing
PackRing is a simple, frontend-only webring-like, designed for Minecraft modpacks.



Feel free to fork this for your own ring! Works via GitHub pages, so no additional hosting is required!

Fair warning that if your fork isn't called `packring `, some of your links will be broken unless you change the associated paths to include your new fork name instead (for example, if your fork was called `my-modpacks`, you'd need to change lines like `<script src="/packring/js/ajax.js"></script>` and ``await ajaxRequest("/packring/packs/"+packs[i])` to read `<script src="/my-modpacks/js/ajax.js"></script>` and `await ajaxRequest("/my-modpacks/packs/"+packs[i])` respectively).



Pages are added by including them as a MarkDown file in `/packs/`, with any uploaded resources they require stored in `/res/`, and then adding the MarkDown file's name to `/packs.txt`. This can be done via pull request, in the case that you'd like people to submit entries to your ring.

The pack MarkDown files must have additional metadata stored as YAML data at the beginning of the file as below:

```
---
Title: 'This text will be used for the title (hover) text of the entry''s icon, as well as the header and page title for the entry''s info page'
Author: 'This is not currently displayed anywhere on the page, but it''s good information to track'
Description: 'This text is displayed below the entry''s icon, and is listed in the entry''s info page''s metadata'
Image: 'This is the filename (relative to the /res/ directory) of the icon to be displayed for the entry on the index page'
URL: 'This is the URL to which the info page''s header will link.'
---
```

