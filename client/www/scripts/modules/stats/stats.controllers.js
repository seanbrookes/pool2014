/**
 * Created by seanbrookes on 2014-04-11.
 */
Stats.controller('RankPosController',[
  '$scope',
  'Dailybatterstat',
  'Dailypitcherstat',
  '$stateParams',
  function($scope, Dailybatterstat, Dailypitcherstat, $stateParams) {
    console.log('pos rank controller');


    $scope.currentFilter = $stateParams.pos;


    var filter = {
      'filter[where][pos]': $stateParams.pos,
      'filter[order]': 'mlbid',
      'filter[order]': 'lastUpdate DESC'
    };

    if ($stateParams.pos === 'all'){
      filter = {
        'filter[order]': 'total DESC'
      };
    }


    $scope.positionRanking = Dailybatterstat.query(filter);
    $scope.positionRanking.$promise.
      then(function (result) {
        $scope.batters = result;
      }
    );

  }
]);