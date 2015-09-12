// lodash has an every method which returns true if each element in the collection passes the condition
// lodash has a some method which returns true if at least one element in the collection passes the condition

var _ = require('lodash');

var HOT_THRESH = 19;

var getWarmAndHotTowns = function(towns) {
  var warmAndHotTowns = {
    hot: [],
    warm: []
  };

  var passesThreshold = function(val) {
    return val > HOT_THRESH;
  };

  _.forEach(towns, function(townTemps, townName) {
    var isHot = _.every(townTemps, passesThreshold);
    var isWarm = _.some(townTemps, passesThreshold);

    if (isHot) {
      warmAndHotTowns.hot.push(townName);
    } else if (isWarm) {
      warmAndHotTowns.warm.push(townName);
    }
  });

  return warmAndHotTowns;
};

var getWarmAndHotTownsAlternative = function(towns) {
  var warmAndHotTowns = {};

  var passesThreshold = function(val) {
    return val > HOT_THRESH;
  };

  warmAndHotTowns.hot = Object.keys(_.pick(towns, function(townTemps) {
    return _.every(townTemps, passesThreshold);
  }));

  warmAndHotTowns.warm = Object.keys(_.pick(towns, function(townTemps) {
    return _.some(townTemps, passesThreshold);
  }));
  warmAndHotTowns.warm = _.filter(warmAndHotTowns.warm, function(warmTown) {
    var isWarmTownAlsoAHotTown = _.includes(warmAndHotTowns.hot, warmTown);
    return !isWarmTownAlsoAHotTown;
  });

  return warmAndHotTowns;
};

module.exports = getWarmAndHotTownsAlternative;
