/**
 * Created by seanbrookes on 2014-04-11.
 */
Stats.service('StatsService', [
  'Totals',
  function(Totals) {
    "use strict";
    var svc = {};
    svc.getAllTotals = function() {

      return Totals.query();
    }
    return svc;
  }
]);