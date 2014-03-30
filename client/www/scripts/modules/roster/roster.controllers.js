/**
 * Created by seanbrookes on 2014-03-27.
 */
Roster.controller('RosterMainController',[
  '$scope',
  '$stateParams',
  function($scope,$stateParams){
    console.log('Roster Main Controller');
    var currentRoster = $stateParams.name;
    var authUser = localStorage.getItem('homeRoster');
    $scope.canEdit = false;
    $scope.player = {};

    if ((authUser === currentRoster) || (authUser === 'god')){
      $scope.canEdit = true;
      $scope.player.roster = currentRoster;
    }

    $scope.savePlayer = function(player){
      if (canEdit){
        console.log('fuck ya');
      }
    }
  }
]);