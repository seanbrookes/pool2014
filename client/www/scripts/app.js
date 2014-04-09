/**
 * Created by seanbrookes on 2014-01-28.
 */
var app = angular.module('app', [
  'ui.router',
  'ngResource',
  'lbServices',
  'Home',
  'Tag',
  'Event',
  'Admin',
  'Auth',
  'Draft',
  'Roster',
  'Reference',
  'Blog',
  'ui.bootstrap',
  'ui.utils',
  'angular-medium-editor',
  'ngGrid'
]);
app.run([
  '$http',
  '$templateCache',
  function ($http, $templateCache) {


  }
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: './scripts/modules/home/templates/home.template.html'
      }).
      state('tags', {
        url:'/tags',
        controller:'TagController',
        templateUrl:'./scripts/modules/tag/templates/tag.input.html'
      }).
      state('reference', {
        url:'/reference',
        controller:'ReferenceMainController',
        templateUrl:'./scripts/modules/reference/templates/reference.links.html'
      }).
      state('admin', {
        url:'/admin',
        controller:'MainAdminController',
        templateUrl:'./scripts/modules/admin/templates/admin.home.html'
      }).
      state('blog', {
        url:'/blog',
        controller:'BlogMainController',
        templateUrl:'./scripts/modules/blog/templates/blog.home.html'
      }).
      state('roster', {
        url:'/roster/:name',
        controller:'RosterMainController',
        templateUrl:'./scripts/modules/roster/templates/roster.main.html'
      }).
      state('auth',{
        url:'/auth/:name',
        controller:'AuthMainController',
        templateUrl:'./scripts/modules/auth/templates/auth.main.html'
      }).
      state('generate',{
        url:'/generate',
        controller:'GenListController',
        templateUrl:'./scripts/modules/draft/templates/draft.main.html'
      }).
      state('draft', {
        url:'/draft',
        controller:'DraftMainController',
        templateUrl:'./scripts/modules/draft/templates/draft.main.html'
      });


  }
]);
app.factory('requestInterceptor', [
  '$q',
  '$rootScope',
  function ($q, $rootScope) {
    return {
      'request': function (config) {
        if (window.localStorage.getItem('accessToken')) {
          config.headers.authorization = window.localStorage.getItem('accessToken');
        }
        // console.log('requestInterceptor [request]config: ', config);
        return config || $q.when(config);
      }
    };
  }
]);
app.controller('AppCtrl', [
  '$scope',
  function ($scope) {
//    $scope.rightButtons = [
//      {
//        type: 'button-positive',
//        content: '<i class="icon ion-navicon"></i>',
//        tap: function (e) {
//        }
//      }
//    ];

    console.log('App Controller');
  }
]);
