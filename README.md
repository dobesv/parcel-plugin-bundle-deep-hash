
This plugin monkey-patches parcel-bundler to consider all inputs when calculating a bundle hash.

This avoid problems with the bundle hash not updating when indirect dependencies of the bundle change.

For example, if you had an html file that reference a js file that reference a css file that references
an image, this plugin makes the hash of the js file change if the image file changes.

To use, just install this as a dev dependency.

See also:
 
* https://github.com/parcel-bundler/parcel/pull/2179
* https://github.com/parcel-bundler/parcel/issues/1481

