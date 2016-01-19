# zero-env

This is a zero configuration script which takes environment variables and turns them into an object. This allows for simple environment based configuration with virtually no effort.

# Install

```bash
npm install --save zero-env
```

# Usage

Simply require the file, and it will provide you with a configuration object:

```bash
export NODE_ENV='production'
export SERVER_PORT='8080'
export SERVER_ASSETS_FOLDER='public/'
export SERVER_ASSETS_URL='/'
export DEBUG_STATIC='true'
export some_otherValue='yes'
node index.js
```

```js
var config = require('zero-env');
var assert = require('assert');
// all caps values are converted to lowercase
assert(config.node.env === 'production');
assert(config.server.port === 8080); // Numeric strings are converted to numbers
assert(config.assets.folder === 'public/');
assert(config.assets.url === '/');
assert(config.debug.static === true); // Boolean strings are converted to booleans
assert(config.some.otherValue === 'yes'); // camelCase vars are respected
```
