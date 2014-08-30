/**
 * Created by seanbrookes on 2014-02-08.
 */
Admin.controller('AdminRawStatsController',[
  '$scope',
  'Dailybatterstat',
  'Dailypitcherstat',
  function($scope, Dailybatterstat, Dailypitcherstat){
    // load roster data

    $scope.mode = '';

    $scope.loadRawBatters = function(){
      $scope.hideBatterButton = true;
      $scope.mode = 'batter';
      $scope.currentRoster = Dailybatterstat.raw();
      $scope.currentRoster.$promise.
        then(function (result) {
          $scope.hideBatterButton = false;
          // $scope.currentRoster = result[0];
          $scope.stats = result.stats;
          $scope.recordCount = result.stats.length;

        }
      ),
      function(response){
        console.log('rejected get batters: ' + JSON.stringify(response));
        $scope.hideBatterButton = false;
      };
    };
    $scope.loadRawPitchers = function(){
      $scope.hidePitcherButton = true;
      $scope.mode = 'pitcher';
      $scope.currentRoster = Dailypitcherstat.raw();
      $scope.currentRoster.$promise.
        then(function (result) {
          $scope.hidePitcherButton = false;
         // $scope.currentRoster = result[0];
          $scope.stats = result.stats;
          $scope.recordCount = result.stats.length;

        }
      );
    };

    $scope.remove = function(array, index){
      $scope.stats.splice(index, 1);
    }


    $scope.deleteRawStat = function(stat, event){
      if (confirm('delete?')){

        event.currentTarget.disabled = true;

        console.log('delete this stat' + stat );
        if ($scope.mode === 'batter'){
          Dailybatterstat.deleteById({id:stat.id},
            function(response){
             // $scope.remove($scope.stats, index);
              console.log('success delete object: ' + JSON.stringify(response));
            },
            function(response){
              console.log('bad delete object: ' + JSON.stringify(response));
            }
          );
        }
        else if ($scope.mode === 'pitcher'){
          Dailypitcherstat.deleteById({id:stat.id},
            function(response){
           //   $scope.remove($scope.stats, index);
              console.log('success delete object: ' + JSON.stringify(response));
            },
            function(response){
              console.log('bad delete object: ' + JSON.stringify(response));
            }
          );

        }
        else {
          console.log('no mode selected for delete');
        }
      }

    }
  }


]);
Admin.controller('TradePlayerController', [
  '$scope',
  function($scope) {
    "use strict";
    console.log('test trade player controller');
  }
]);
Admin.controller('RosterTradeController', [
  '$scope',
  'RosterService',
  'Roster',
  function($scope, RosterService, Roster) {
    "use strict";
    var slug = 'bashers';
    $scope.currentRosters = [];
    $scope.sourceRosterName = '';
    $scope.targetPlayer = {};
    $scope.targetRosterName = '';

    $scope.resetTradeObj = function() {
      $scope.sourceRosterName = '';
      $scope.targetPlayer = {};
      $scope.targetRosterName = '';

    };
    $scope.saveTradeData = function() {

      // get source roster
      var sourceRoster = {};
      var targetRoster = {};

      for (var i = 0; i < $scope.currentRosters.length;i++) {
        if ($scope.currentRosters[i].name.toLowerCase() === $scope.sourceRosterName.toLowerCase()) {
          sourceRoster = $scope.currentRosters[i];
          break;
        }
      }
      for (var k = 0; k < $scope.currentRosters.length;k++) {
        if ($scope.currentRosters[k].name.toLowerCase() === $scope.targetRosterName.toLowerCase()) {
          targetRoster = $scope.currentRosters[k];
          break;
        }
      }

      if (sourceRoster && targetRoster) {
        // isolate the player object
        var playerObj = $scope.targetPlayer;

        // update the roster to  new roster
        playerObj.roster = $scope.targetRosterName;
        // add to new roster players array
        targetRoster.players.push(playerObj);
        // remove from original roster
        for (var x = 0;x < sourceRoster.players.length;x++) {
          if (playerObj.mlbid === sourceRoster.players[x].mlbid) {
            sourceRoster.players.splice(x,1);
          }
        }

        delete sourceRoster._id;
        delete targetRoster._id;

        Roster.upsert(sourceRoster, function(response) {
            Roster.upsert(targetRoster, function(response) {
                console.log('FUCK YA');
                $scope.resetTradeObj();
                $scope.loadRosters();
              },
              function(response){
                console.warn('bad update target roster');
              });
        },
        function(response){
          console.warn('bad update source roster');
        });
        var t = 'y';

        var p = t;
        // update roster

      }

      // get target roster



    };
    var pIndex = 1;
    $scope.players = [];
    $scope.change = function(roster) {

      $scope.targetRosterName = roster;
      console.log(roster);
    };
    $scope.playerAction = function(obj) {
      $scope.sourceRosterName = obj.roster;
      $scope.targetPlayer = obj;
    };
    // load roster data
    var filter = {
      'filter[where][slug]':slug
    };
    $scope.loadRosters = function() {
      $scope.currentRosters = Roster.query({});
      $scope.currentRosters.$promise.
        then(function (result) {
          $scope.currentRosters = result;
          var totalPlayers = [];

          for (var i = 0;i < $scope.currentRosters.length;i++) {
            var tRoster = $scope.currentRosters[i];
            var currSlug = tRoster.slug;
            for (var x = 0;x < tRoster.players.length;x++) {
              var tPlayer = tRoster.players[x];

              tPlayer.roster = currSlug;
              tPlayer.index = pIndex;
              totalPlayers.push(tPlayer);
              pIndex++;
            }
            pIndex = 1;
          }

          $scope.players = totalPlayers;

        }
      );

    };
    $scope.loadRosters();
  }
]);
Admin.controller('RosterAdminController',[
  '$scope',
  'RosterService',
  'Roster',
  function($scope, RosterService, Roster) {
    "use strict";
    $scope.currRoster = {};
    $scope.loadAdminRoster = function(slug){

      $scope.currRoster = slug;
      // load roster data
      var filter = {
        'filter[where][slug]':slug
      };
      $scope.currentRoster = Roster.query(filter);
      $scope.currentRoster.$promise.
        then(function (result) {
          $scope.currentRoster = result[0];
          $scope.players = $scope.currentRoster.players;

        }
      );

    };

    $scope.editThisPlayer = function(player){
      $scope.editPlayer = player;
    };
    $scope.saveEditPlayer = function(player){
      var editConfirmed = false;

      if (player.mlbid){
        angular.forEach($scope.currentRoster.players, function(value, key){
          if (value.mlbid === player.mlbid){
            console.log('matched player');
            $scope.currentRoster.players[key] = player;
            editConfirmed = true;
          }
        });
      }
      else {
        $scope.currentRoster.players.push(player);
        editConfirmed = true;
      }


      if (editConfirmed){
        var rosterObj = $scope.currentRoster;
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

    };









  }
]);
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