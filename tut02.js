// sorting arrays using lodash is very easy, always sorts in asscending order

var _ = require('lodash');

var sortItemsByQuantity = function(items) {
  return _.sortBy(items, 'quantity').reverse();
};

module.exports = sortItemsByQuantity;