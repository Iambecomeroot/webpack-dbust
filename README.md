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

### autosave
Specefies if `dbust.save` should be called automatically. Defaults to `false`.

### dbust
The rest of the options are passed to dbust. They can be found [here](https://www.npmjs.com/package/dbust#options).

## See also
1. [dbust](https://www.npmjs.com/package/dbust)
1. [gulp-dbust](https://www.npmjs.com/package/gulp-dbust)

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
