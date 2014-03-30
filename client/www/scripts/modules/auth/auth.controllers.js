/**
 * Created by seanbrookes on 2014-03-30.
 */
Auth.controller('AuthMainController',[
  '$scope',
  '$stateParams',
  '$state',
  function($scope, $stateParams, $state){
    console.log('Auth Controller:  ' + $stateParams.name);
    if ($stateParams.name){
      localStorage.setItem('homeRoster',$stateParams.name);
      $state.go('draft');
    }
  }
]);