/**
 * Created by seanbrookes on 2014-02-08.
 */
Admin.controller('MainAdminController',[
  '$scope',
  'Rawbatterid',
  'Rawpitcherid',
  'Roster',
  function($scope, Rawbatterid, Rawpitcherid, Roster){
    "use strict";

    $scope.allPlayers = [];
    $scope.linkPLayer = {};
    $scope.players = [];
    $scope.currRoster = {};

    $scope.pullRawBatters = function(){
      console.log('pull raw batters');
      $scope.allPlayers = Rawbatterid.query();
    };
    $scope.pullRawPitchers = function(){
      console.log('pull raw pitchers');
      $scope.allPlayers = Rawpitcherid.query();

    };
    $scope.getAssociatedStatus = function(player){

      if (player.mlbid){
        return 'is-associated';
      }


    };
    $scope.associateRosterPLayer = function(player){
      console.log('PLayer: ' + player.name);
      var refreshPlayers = [];
      angular.forEach($scope.players, function(value, key){
        var targetPlayer = value;
        if (value.name === player.name){
          console.log('MATCH  value: ' + JSON.stringify(value));
          targetPlayer.mlbid = $scope.mLBSet.mlbid;
          // map the property on the object
        }
        refreshPlayers.push(targetPlayer);


      });
      // reassign players to roster
      $scope.currentRoster.players = refreshPlayers;
      console.log('save this: ' + JSON.stringify($scope.currentRoster));
      delete $scope.currentRoster._id;
      Roster.upsert($scope.currentRoster,
        function(response){
          console.log('good update roster');
          // load roster data
          var filter = {
            'filter[where][slug]':$scope.currRoster
          };
          $scope.currentRoster = Roster.query(filter);
          $scope.currentRoster.$promise.
            then(function (result) {
              $scope.currentRoster = result[0];
              $scope.players = $scope.currentRoster.players;

            });
        },
        function(response){
          console.log('bad update roster');
        }
      );
      // save roster
      // clean things up
     // $scope.linkPLayer = player;




    };

    $scope.chooseMLBPLayer = function(){
      console.log('selected mlb player: ' + $scope.mLBSet.mlbid);
    };

    $scope.selectedMLBIds = [];

    $scope.loadRoster = function(roster){
      $scope.currRoster = roster;
      // load roster data
      var filter = {
        'filter[where][slug]':$scope.currRoster
      };
      $scope.currentRoster = Roster.query(filter);
      $scope.currentRoster.$promise.
        then(function (result) {
          $scope.currentRoster = result[0];
          $scope.players = $scope.currentRoster.players;

        });

    }
  }
]);