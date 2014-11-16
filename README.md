# grunt-sakugawa

> Run [Sakugawa](https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser")
> via [Grunt](http://gruntjs.com/ "The JavaScript Task Runner"), for CSS splitting, filtering and organising.

[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/grunt-sakugawa/index)](https://github.com/igrigorik/ga-beacon)

## Installation

```shell
npm install grunt-sakugawa --save-dev
```

```js
grunt.loadNpmTasks('grunt-sakugawa');
```

## The "sakugawa" task

### Overview

In your project's Gruntfile, add a section named `sakugawa` to the data object passed
into `grunt.initConfig()`.

```js
grunt.initConfig({
  sakugawa: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator

Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.


## Version history

None yet..

## License

Copyright (c) Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE).
