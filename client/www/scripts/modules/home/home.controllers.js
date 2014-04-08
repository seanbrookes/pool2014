/**
 * Created by seanbrookes on 2014-01-28.
 */
Home.controller('HomeController', [
  '$scope',
  'Statupdate',
  function ($scope,Statupdate) {

    console.log('home controller');


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
    }


  }
]);
