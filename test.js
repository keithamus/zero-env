process.env = {
  'Foo': 'bar',
  'Bar_baz': 'bing',
  'the_config_this': 'true',
  'the_config_that': 'false',
  'the_config_the_other': 'Infinity',
  'exists_in_config': '',
  'ALLCAPSTHING': 'true',
  'ALL_CAPS_THING': '20',
  'thing': 'this is a string',
  'thing_foo': 'this is a sub-property?'
};
var config = require('./');
var expected = {
  Foo: 'bar',
  Bar: {
    baz: 'bing',
  },
  the: {
    config: {
      this: true,
      that: false,
      the: {
        other: Infinity,
      },
    },
  },
  exists: {
    in: {
      config: '',
    },
  },
  allcapsthing: true,
  all: {
    caps: {
      thing: 20,
    },
  },
  thing: {
    value: 'this is a string',
    foo: 'this is a sub-property?'
  }
};
try {
  require('assert').deepEqual(config, expected);
} catch (error) {
  var inspect = require('util').inspect;
  console.log('Actual:', inspect(config, { depth: Infinity }));
  console.log('Expected:', inspect(expected, { depth: Infinity }));
  throw error;
}
console.log('Tests passed ')
