// lodash collection functions can be used on both arrays and objects, unlike
// ES5

var _ = require('lodash');

var updateCitiesWithSize = function(cities) {
  return _.forEach(cities, function(city) {
    if (city.population > 1) {
      city.size = 'big';
    } else if (city.population > 0.5) {
      city.size = 'med';
    } else {
      city.size = 'small';
    }
  });
};

module.exports = updateCitiesWithSize;