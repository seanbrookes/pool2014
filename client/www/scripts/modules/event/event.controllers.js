/**
 * Created by seanbrookes on 2014-01-29.
 */
//function onGoogleReady() {
// // angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
//}




/*
*
*
* Event GMap controller
*
* */

Event.controller('EventGMapController',[
  '$scope',
  '$state',
  'EventService',
  '$http',
  'limitToFilter',
  'TagService',
  function($scope, $state, EventService, $http, limitToFilter, TagService){
    "use strict";
//    var tagSource = [];
//    $scope.fufuck = '';
//    $scope.events = EventService.getRecentEvents();
//    $scope.sort = function(item) {
//      if (this.predicate == 'date') {
//        return new Date(item.date);
//      }
//      return item[this.predicate];
//    };







  }
]);












Event.controller('EventController',[
  '$scope',
  '$state',
  'EventService',
  '$http',
  'limitToFilter',
  'TagService',
  function($scope, $state, EventService, $http, limitToFilter, TagService){
    "use strict";
    var tagSource = [];
    $scope.fufuck = '';
    $scope.events = EventService.getRecentEvents();
    $scope.sort = function(item) {
      if (this.predicate == 'date') {
        return new Date(item.date);
      }
      return item[this.predicate];
    };

    $scope.addEventTag = function(event, tag){
      console.log('Add Event Tag: ' + event + ' '  + tag + ' '  + tagArray);
      var targetTagObj = {};
      for (var i = 0;i < tagArray.length;i++){
        if (tagArray[i].name === tag){
          targetTagObj = tagArray[i];
          break;
        }
      }

      event.tags.push(targetTagObj);
      delete event._id;
      EventService.api.Event.upsert(event,
        function(response){
          console.log('good add tag: ' + JSON.stringify(response));
          $scope.fufuck = '';
          $scope.fuckForm.$setPristine();

        },
        function(response){
          console.log('bad add tag: ' + JSON.stringify(response));
        }
      );
    };
    $scope.deleteEvent = function(event){
      if (confirm('delete event?')){
        console.log('delete event: ' + JSON.stringify(event));
        EventService.api.Event.delete(event,
          function(response){
            console.log('success delete object: ' + JSON.stringify(response));
          },
          function(response){
            console.log('bad delete object: ' + JSON.stringify(response));
          }
        );
      }

    };





  }
]);
Event.controller('EventFormController',[
  '$scope',
  '$state',
  'EventService',
  function($scope, $state, EventService){
    "use strict";
    console.log('Event Form Controller');
    $scope.editMode = true;
    $scope.provStates = window.provStates;
    $scope.countries = [
      {
        name:'Canada'
      },
      {
        name:'United States'
      },
      {
        name:'Mexico'
      }
    ];
    $scope.magnitudes = [1,2,3,4,5,6,7,8,9,10];

    $scope.getMatchProvStates = function(type){
      console.log('entered: ' + type);
    }


    $scope.eventObj = {};
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
      $scope.showWeeks = ! $scope.showWeeks;
    };

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      'year-format': "'yy'",
      'starting-day': 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];




    /*
    *
    * Save Event Form
    *
    * */
    $scope.saveEvent = function(){


      var saveEventObj = $scope.eventObj;
//      saveEventObj.country = $scope.eventObj.country.name;
//      saveEventObj.stateProv = $scope.eventObj.stateProv.name;

      console.log('Save Event: ' + JSON.stringify(saveEventObj));

      EventService.api.Event.create(saveEventObj,
        function(reponse){
          $scope.eventObj = {};
          $scope.EventForm. $setPristine();
          window.localStorage.removeItem('RecentEvents');
          console.log('saved the event');
        },
        function(response){
          console.log('bad save new event');
        }
      );

    };
   }

]);
Event.controller('EventEditController',[
  '$scope',
  function($scope){
    "use strict";
    console.log('EDIT EVENT');
  }
]);