/**
 * Created by seanbrookes on 2014-02-08.
 */
Admin.controller('MainAdminController',[
  '$scope',
  'Rawbatterid',
  'Rawpitcherid',
  'Statupdate',
  'Roster',
  function($scope, Rawbatterid, Rawpitcherid, Statupdate, Roster){
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

    $scope.refreshStats = function(){
      console.log('refresh stats');

      Statupdate.create({},
        function(response){
          console.log('good stats update: ' + JSON.stringify(response));
        },
        function(response){
          console.log('bad stats update: ' + JSON.stringify(response));
        }
      );
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

    };

    $scope.deletePlayer = function(player){
      if(confirm('delete player')){
//        console.log('try to delete: ' + player.name);
//
//        var index = $scope.currentRoster.players.indexOf(player);
//        $scope.currentRoster.players.splice(index,1);
//        delete $scope.currentRoster._id;
//        Roster.upsert($scope.currentRoster,
//          function(response){
//            console.log('good update roster');
//            var filter = {
//              'filter[where][slug]':$scope.currentRosterName
//            };
//            $scope.currentRoster = Roster.query(filter);
//            $scope.currentRoster.$promise.then(function (result) {
//              $scope.currentRoster = result[0];
//
//              $scope.players = $scope.currentRoster.players;
//              $scope.player = {
//                draftStatus:'roster',
//                status:'regular',
//                posType:'hitter'
//              };
//
//
//            });
//          },
//          function(response){
//            console.log('bad update roster');
//          }
//        );


      }
    };
    $scope.savePlayer = function(player){
      console.log('fuck ya');
      var rosterObj = $scope.currentRoster;
      if (!rosterObj.players){
        rosterObj.players = [];
      }
      rosterObj.players.push(player);

      if (rosterObj._id){
        delete rosterObj._id;
        Roster.upsert(rosterObj,
          function(response){
            console.log('good update roster');
            var filter = {
              'filter[where][slug]':$scope.currentRosterName
            };
            $scope.currentRoster = Roster.query(filter);
            $scope.currentRoster.$promise.then(function (result) {
              $scope.currentRoster = result[0];

              $scope.players = $scope.currentRoster.players;
              $scope.player = {
                draftStatus:'roster',
                status:'regular',
                posType:'hitter'
              };


            });
          },
          function(response){
            console.log('bad update roster');
          }
        );
      }
      else{
        rosterObj.name = $scope.currentRosterName;
        rosterObj.slug = $scope.currentRosterName;
        Roster.updateOrCreate(rosterObj,
          function(response){
            console.log('good update roster');
            var filter = {
              'filter[where][slug]':$scope.currentRosterName
            };
            $scope.currentRoster = Roster.query(filter);
            $scope.currentRoster.$promise.then(function (result) {
              $scope.currentRoster = result[0];

              $scope.players = $scope.currentRoster.players;
              $scope.player = {
                draftStatus:'roster',
                status:'regular',
                posType:'hitter'
              };


            });
          },
          function(response){
            console.log('bad update roster');
          }
        );
      }


    };
  }
]);