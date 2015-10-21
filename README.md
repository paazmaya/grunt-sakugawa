# grunt-sakugawa (グラント佐久川)

> Run [Sakugawa][] via [Grunt](http://gruntjs.com/ "The JavaScript Task Runner"),
> for CSS splitting, filtering and organising.

![Mr Sakugawa and Mr Grunt](./logo.png)

[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/grunt-sakugawa/index?flat)](https://github.com/igrigorik/ga-beacon)
[![Dependency Status](https://img.shields.io/david/paazmaya/grunt-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/grunt-sakugawa)
[![devDependency Status](https://img.shields.io/david/dev/paazmaya/grunt-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/grunt-sakugawa#info=devDependencies)
[![Built with Grunt](http://img.shields.io/badge/Grunt-0.4-blue.svg?style=flat-square)](http://gruntjs.com/)

[Internet Explorer versions from 6 up to 9 come with a limitation][ieinternals] for
selectors present in a single CSS file. This limitation of 4095 selectors created the
need for CSS splitter, which might be the main use case of this task runner plugin.

Since IE8 and earlier, do not support media queries, but IE9 does, there is an option for handling
media queries differently, based on the targeted IE version. By separating media queries in
to a different file, it will allow the to include that CSS file [conditionally][] only when
IE9 is being used. Ideally this would reduce the amount of bytes downloaded by IE8, which
cannot handle the media queries anyhow, and thus prevent downloading something that is not
even used.

Internally this Grunt task uses [Sakugawa][], thus in the case of any problems regarding the
resulting output or input handling, and also for any feature requests, please refer to the
[issues at Sakugawa project](https://github.com/paazmaya/sakugawa/issues "Issues for Sakugawa").


## Installation

```sh
npm install grunt-sakugawa --save-dev
```

```js
grunt.loadNpmTasks('grunt-sakugawa');
```

## The "sakugawa" task

### Overview

Example configuration against [Pure CSS](http://purecss.io/ "A set of small, responsive CSS modules that you can use in every web project"),
which results in two files, `pure-min_1.css` and `pure-min_2.css` in which the latter
contains all media queries.


```js
grunt.initConfig({
  sakugawa: {
    sakugawa: {
      pure: {
        options: {
          maxSelectors: 400,
          mediaQueries: 'separate',
          suffix: '_'
        },
        src: ['pure-min.css']
      }
    }
  },
});
```

The CSS file used in the example can be retrieved with:

```sh
wget http://yui.yahooapis.com/pure/0.5.0/pure-min.css
```

### Options

#### options.maxSelectors

Type: `Number`

Default value: `4090`

Maximum number of selector in a single resulting file.
The actual selector count might be a bit lower based
on the distribution of the selectors.

#### options.minSheets

Type: `Number`

Default value: `1`

Minimum number of output CSS files

#### options.mediaQueries

Type: `String`

Default value: `'normal'`

Media query handling, separation to different file (`'separate'`) or ignorance (`'ignore'`).
By default media queries are included as they appear in the original CSS.

#### options.suffix

Type: `String`

Default value: `'_'`

Output CSS file suffix.
For example the underscore before file counter, `styles_1.css`.

## Contributing

[Please refer to a GitHub blog post on how to create somewhat perfect pull request.](https://github.com/blog/1943-how-to-write-the-perfect-pull-request "How to write the perfect pull request")


## Version history

* v0.4.0 (2015-03-11) Update Sakugawa to `v0.4.0` which preserves existing `@charset` rules to all resulting files
* v0.3.1 (2015-02-25) Use at least Sakugawa `v0.3.2` due to its fixes. Better destination handling
* v0.3.0 (2015-02-23) Update Sakugawa to `v0.3.0` which adds the `minSheets` option. Also fix task when destination is a directory
* v0.2.0 (2014-11-19) Speed improvements release of Sakugawa migration
* v0.1.0 (2014-11-17) Initial release matching with Sakugawa release

## License

Copyright (c) Juga Paazmaya <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).


[Sakugawa]: https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser"
[ieinternals]: http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx "Stylesheet Limits in Internet Explorer"
[conditionally]: http://www.quirksmode.org/css/condcom.html "Conditional comments"
