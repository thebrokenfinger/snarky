const snarkdown = require("snarkdown");
const Promise = require("pinkie-promise");

module.exports = function(md) {
  let html;

  try {
    html = snarkdown(md);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(html);
};

module.exports.sync = function(md) {
  return snarkdown(md);
};
