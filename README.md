Branch Cache
============

This is a TYPO3 CMS extension which adds a new entry in the context menu of pages
in the page tree to clear the cache for an entire branch.

Installation
------------

The installation is straightforward. Install the extension via composer,
reload the whole Backend and start clearing your cache! :)

```
composer require cobweb/branch-cache
```

As the extension is not yet on Packagist, the Git repository must be added
manually.

```
{
    "type": "git",
    "url": "https://github.com/cobwebch/branch_cache.git"
}
```

Source of inspiration https://github.com/TYPO3-extensions/sm_clearcachecm. Thanks Steffen!
