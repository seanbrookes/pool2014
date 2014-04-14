/**
 * Created by seanbrookes on 2014-04-11.
 */
Common.directive('grandTotalsSummaryList', [
  'Totals',
  function(Totals){
    return{
      templateUrl: './scripts/modules/common/templates/totals.list.html',
      controller:[
        '$scope',
        function($scope){
          var filter = {};

          $scope.rosters = Totals.query(filter);
          $scope.rosters.$promise.
            then(function (result) {
              $scope.rosters = result;

            }
          );


        }
      ]
    }
  }
]);
Common.directive('generalTotalsSummaryList', [
  'Totals',
  function(Totals){
    return{
      templateUrl: './scripts/modules/common/templates/general.totals.html',
      controller:[
        '$scope',
        function($scope){
          var filter = {};

          $scope.rosters = Totals.query(filter);
          $scope.rosters.$promise.
            then(function (result) {
              $scope.rosters = result;

            }
          );


        }
      ]
    }
  }
]);