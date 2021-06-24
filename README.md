# grunt-sakugawa (グラント佐久川)

> Run [Sakugawa][] via [Grunt](http://gruntjs.com/ "The JavaScript Task Runner"),
> for CSS splitting, filtering and organising.

![Mr Sakugawa and Mr Grunt](./logo.png)

[![Dependency Status](https://img.shields.io/david/paazmaya/grunt-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/grunt-sakugawa)
[![devDependency Status](https://img.shields.io/david/dev/paazmaya/grunt-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/grunt-sakugawa#info=devDependencies)
[![wercker status](https://app.wercker.com/status/bfd3bc415622e44982d6c09bfe931e70/s "wercker status")](https://app.wercker.com/project/bykey/bfd3bc415622e44982d6c09bfe931e70)
[![Built with Grunt](http://img.shields.io/badge/Grunt-1.0-blue.svg?style=flat-square)](http://gruntjs.com/)

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

## Getting Started

This plugin requires [Grunt](http://gruntjs.com/) `~0.4` and [Node.js](https://nodejs.org/en/)
version to be minimum of `14.15.0`, which is [the active Long Term Support (LTS) version](https://github.com/nodejs/Release#release-schedule).

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create
a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sakugawa --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

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

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-the-best-advice-for-making-your-first-contribution/).

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

## Version history

[Changes happening across different versions and upcoming changes are tracked in the `CHANGELOG.md` file.](CHANGELOG.md)

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).


[Sakugawa]: https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser"
[ieinternals]: http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx "Stylesheet Limits in Internet Explorer"
[conditionally]: http://www.quirksmode.org/css/condcom.html "Conditional comments"
