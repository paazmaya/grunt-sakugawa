# grunt-sakugawa (グラント佐久川)

> Run [Sakugawa](https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser")
> via [Grunt](http://gruntjs.com/ "The JavaScript Task Runner"), for CSS splitting, filtering and organising.

![Mr Sakugawa and Mr Grunt](./logo.png)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/grunt-sakugawa/index)](https://github.com/igrigorik/ga-beacon)
[![Dependency Status](https://david-dm.org/paazmaya/grunt-sakugawa.svg)](https://david-dm.org/paazmaya/grunt-sakugawa)
[![devDependency Status](https://david-dm.org/paazmaya/grunt-sakugawa/dev-status.svg)](https://david-dm.org/paazmaya/grunt-sakugawa#info=devDependencies)

## Installation

```shell
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

#### options.mediaQueries

Type: `String`

Default value: `'normal'`

Media query handling, separation to different file (separate) or ignorance (ignore).
By default media queries are included as they appear in the original CSS.


#### options.suffix

Type: `String`

Default value: `'_'`

Output CSS file suffix.
For example the underscore before file counter, `styles_1.css`.


## Version history

* v0.2.0 (2014-11-19) Speed improvements release of Sakugawa migration
* v0.1.0 (2014-11-17) Initial release matching with Sakugawa release

## License

Copyright (c) Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE).
