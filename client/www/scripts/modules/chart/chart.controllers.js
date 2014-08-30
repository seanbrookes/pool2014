/**
 * Created by seanbrookes on 2014-05-31.
 */
Chart.controller('ChartMainController', [
  '$scope',
  'StatsService',
  function ($scope, StatsService) {
    "use strict";
    console.log('Chart Main Controller');

    $scope.totals = [];

    var totals = StatsService.getAllTotals();
    totals.$promise.
      then(function(result) {
        $scope.totals = result;
      });
  }
]);