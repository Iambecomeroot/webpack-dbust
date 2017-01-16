# webpack-dbust - A webpack plugin for [dbust](https://www.npmjs.com/package/dbust)
Saves cache-busted filenames to a json file. Deletes old cache-busted files.

## Usage
```js
const Dbust = require('webpack-dbust')

module.exports = {
  entry: './source/js/main.js',
  output: {
    path: './public/js/',
    filename: '[name]-[chunkname].js'
  },
  plugins: [ new Dbust(options) ],
}
```

## Options
Accepts an object containing options. For a list of options see https://www.npmjs.com/package/dbust#options

## See also
1. [dbust](https://www.npmjs.com/package/dbust)
1. [gulp-dbust](https://www.npmjs.com/package/gulp-dbust)

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
