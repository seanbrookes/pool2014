/**
 * Created by seanbrookes on 2014-03-27.
 */
Roster.controller('RosterMainController',[
  '$scope',
  'RosterService',
  'Roster',
  'Rosterbatter',
  'Rosterpitcher',
  '$stateParams',
  function($scope, RosterService, Roster, Rosterbatter, Rosterpitcher, $stateParams){
    console.log('Roster Main Controller');
    $scope.currentRosterName = $stateParams.name;
    var authUser = localStorage.getItem('homeRoster');
    $scope.canEdit = false;
    $scope.player = {
      draftStatus:'roster',
      status:'regular',
      posType:'hitter'
    };
    var filter = {
      'filter[where][slug]':$scope.currentRosterName
    };
    $scope.currentRoster = Roster.query(filter);
    $scope.currentRoster.$promise.
      then(function (result) {
        $scope.currentRoster = result[0];
        $scope.players = $scope.currentRoster.players;

      });
    $scope.editPlayer = function(player){
      console.log('edit player');
    };
    $scope.deletePlayer = function(player){
      if(confirm('delete player')){
        console.log('try to delete: ' + player.name);

        var index = $scope.currentRoster.players.indexOf(player);
        $scope.currentRoster.players.splice(index,1);
        delete $scope.currentRoster._id;
        Roster.upsert($scope.currentRoster,
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

    $scope.postToHitterList = function(){

      console.log('POST THESE PLAYERS: ' + $scope.players);
      angular.forEach($scope.players, function(value, key){
        var playerObj = value;
        playerObj.roster = $scope.currentRosterName;
        playerObj.rosterStatus = value.status;
       // console.log('roster: ' + $scope.currentRosterName);
        if (playerObj.posType === 'hitter' ){
         // console.log('HITTER: ' + JSON.stringify(playerObj));
          Rosterbatter.updateOrCreate(playerObj,
            function(response) {
              console.log('good add roster batter');
            },
            function(response) {
              console.log('bad add roster batter');
            }
          )
        }
        else if (playerObj.posType === 'pitcher'){
          //console.log('PITCHER: ' + JSON.stringify(playerObj));
          Rosterpitcher.updateOrCreate(playerObj,
            function(response) {
              console.log('good add roster pitcher');
            },
            function(response) {
              console.log('bad add roster pitcher');
            }
          )

        }
        else {
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ' + JSON.stringify(playerObj));
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ');
          console.log('wtf:   ');
        }





      });
    }

  }
]);