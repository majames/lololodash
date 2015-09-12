// lodash is a js library that has a bunch of useful utilities
// lodash is a superset of underscore

// the 'where' functon filters a collection based on given properties object

var _ = require('lodash');

var filterActiveUsers = function(userArray) {
  return _.where(userArray, {
    active: true
  });
};

module.exports = filterActiveUsers;