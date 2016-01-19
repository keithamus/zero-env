'use strict';
module.exports = (function loadConfig(options) {
  var config = {};
  var envKeys = Object.keys(process.env);
  var envKeysLength = envKeys.length;
  for (var i = 0; i < envKeysLength; ++i) {
    var value = process.env[envKeys[i]];
    var currentConfigBlock = config;
    var keyParts = envKeys[i].split(/_/g);
    var currentKeyPart;
    while(currentKeyPart = keyParts.shift()) {
      if (/^[A-Z]+$/.test(currentKeyPart)) {
        currentKeyPart = currentKeyPart.toLowerCase();
      }
      if (!Number.isNaN(Number(currentKeyPart))) {
        currentKeyPart = Number(currentKeyPart);
      }
      if (keyParts.length) {
        if (currentConfigBlock.hasOwnProperty(currentKeyPart) === false) {
          currentConfigBlock[currentKeyPart] = typeof current === 'number' ? [] : {};
        }
        if (typeof currentConfigBlock[currentKeyPart] === 'string') {
          currentConfigBlock[currentKeyPart] = {
            value: currentConfigBlock[currentKeyPart],
          };
        }
        currentConfigBlock = currentConfigBlock[currentKeyPart];
      } else {
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        } else if (value.length && Number.isNaN(Number(value)) === false) {
          value = Number(value);
        }
        currentConfigBlock[currentKeyPart] = value;
      }
    }
  }
  return config;
})();
