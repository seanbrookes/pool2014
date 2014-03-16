/**
 * Created by seanbrookes on 2014-02-02.
 */
Event.directive('owEventTags',[
  function(){
    "use strict";
    return{
      scope:{
        event:'='
      },
      templateUrl:'./scripts/modules/event/templates/event.tags.html',
      require:'ngModel',
      controller:  function($scope, $state, EventService, $http, limitToFilter, TagService){
        var tagSource = [];
        $scope.fufuck = '';
        $scope.selected = undefined;
        $scope.addTagMode = false;
        $scope.events = EventService.getRecentEvents();
        $scope.sort = function(item) {
          if (this.predicate == 'date') {
            return new Date(item.date);
          }
          return item[this.predicate];
        };

        $scope.toggleAddTag = function(){
          $scope.addTagMode = !$scope.addTagMode;
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

          $scope.eventObj.tags.push(targetTagObj);
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


        $scope.selected = undefined;
//    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


        //$scope.tags = ['train','spill','natural gas','ship'];
        var tagArray = TagService.getSystemTags();
        angular.forEach(tagArray,function(item){
          tagSource.push(item.name);
        });
        $scope.tags = tagSource;
//          function(response){

//        for (var i = 0;i <  tagArray.length;i++){
//          tagSource.push(tagArray[i].name);
//        }
//            angular.forEach(tagArray,function(item){
//              tagSource.push(item.name);
//            });
//            console.log('good tag query proc: ' + JSON.stringify(tagSource));
//
//            $scope.tags = tagSource;
//          },
//          function(response){
//            console.log('bad tag query: ' + JSON.stringify(response));
//          }

       // );


        $scope.reverse = false;

        $scope.editMode = false;


        $scope.removeEventTag = function(event, tag){
//          console.log('REMove tag: ' + JSON.stringify(tag));
//          console.log('REMove event: ' + JSON.stringify(event));

          event.tags = _.reject(event.tags, function(el) { return el.name === tag.name; });
          delete event._id;
          EventService.api.Event.upsert(event,
            function(response){
              console.log('good remove tag: ' + JSON.stringify(response));
              $scope.fufuck = '';
              $scope.fuckForm.$setPristine();
            },
            function(response){
              console.log('bad remove tag: ' + JSON.stringify(response));
            }
          );
        }


      },
      link:function(scope, element, attrs, ngModel){
        // console.log(scope, element, attrs);
//        console.log(ngModel);
//        console.log(ngModel.$modelValue);
        var render = function(){
          //console.log('modelValue:', ngModel.$modelValue);
          scope.eventObj = ngModel.$modelValue;

        };


        scope.$watch(attrs['ngModel'], render);
        render();
      }
    }
  }

]);
Event.directive('owEventLinkForm',[
  function(){
    "use strict";
    return{
      scope:{
        event:'='
      },
      templateUrl:'./scripts/modules/event/templates/link.form.html',
      require:'ngModel',
      controller:function($scope,$rootScope,LinkService){
        $scope.addLinkMode = false;

        var linkObj = {};
        $scope.linkObj = linkObj;

        $scope.addLink = function(event){
          $scope.addLinkMode = true;
          //console.log(JSON.stringify(event));
          //$state.go('/editevent/' + event._id);
        };
        $scope.saveLink = function(){
          var linkObj = $scope.linkObj;
          var saveEventObj = $scope.eventObj;
          linkObj.eventId = saveEventObj.id;
          // set title to url until it gets processed
          linkObj.title = linkObj.url;

          LinkService.api.Link.updateOrCreate(linkObj,
            function(response){
              console.log('good save link: ' + JSON.stringify(response));

              $scope.links = LinkService.api.getEventLinks($scope.eventObj.id);
              // on success clear the object
              $scope.linkObj = {};
            },
            function(response){
              console.log('bad save link: ' + JSON.stringify(response));
            }
          );


          //console.log('against object: ' + JSON.stringify(saveEventObj));
        }
      },
      link:function(scope, element, attrs, ngModel){
        // console.log(scope, element, attrs);
//        console.log(ngModel);
//        console.log(ngModel.$modelValue);
        var render = function(){
          //console.log('modelValue:', ngModel.$modelValue);
          scope.eventObj = ngModel.$modelValue;

        };


        scope.$watch(attrs['ngModel'], render);
        render();
      }
    }
  }
]);
//Event.directive('owEventTags',[
//  'EventService'
//]);
Event.directive('owEventLinkList',[
  'LinkService',
  function(LinkService){
    "use strict";
    return{
      templateUrl:'./scripts/modules/event/templates/event.links.list.html',
      require: 'ngModel',
      controller:function($scope, LinkService){
        $scope.addLinkMode = false;

        $scope.linkObj = {};
        $scope.links = [];

        $scope.addLink = function(event){
          $scope.addLinkMode = true;
          //console.log(JSON.stringify(event));
          //$state.go('/editevent/' + event._id);
        };
        $scope.saveLink = function(){
          var linkObj = $scope.linkObj;
          var saveEventObj = $scope.eventObj;
          linkObj.eventId = saveEventObj.id;
          // set title to url until it gets processed
          linkObj.title = linkObj.url;

          LinkService.api.Link.updateOrCreate(linkObj,
            function(response){
              console.log('good save link: ' + JSON.stringify(response));

              $scope.links = LinkService.api.getEventLinks($scope.event.id);
              // on success clear the object
              $scope.linkObj = {};
            },
            function(response){
              console.log('bad save link: ' + JSON.stringify(response));
            }
          );


          //console.log('against object: ' + JSON.stringify(saveEventObj));
        }

        //console.log('Link List Controller');

        $scope.deleteEventLink = function(link){
          if (confirm('delete link?')){
            LinkService.api.Link.delete({id:link.id},
              function(response){
                console.log('good delete link. reload this event links: ' + $scope.event.id);
                $scope.links = LinkService.api.getEventLinks($scope.event.id);
              },
              function(response){
                console.log('bad delete link: ' + JSON.stringify(response));

              }
            );


          }

        };
      },
      link:function(scope, element, attrs, ngModel ){
        // console.log(scope, element, attrs);
//        console.log(ngModel);
//        console.log(ngModel.$modelValue);
        var render = function(){
//          console.log('modelValue:', ngModel.$modelValue);
//          scope.eventObj = ngModel.$modelValue;
          var eventId = ngModel.$modelValue.id;
         // scope.links = LinkService.api.getEventLinks(eventId);

        };


        scope.$watch(attrs['ngModel'], render);
        render();
      }
    }
  }
]);
/**
 *
 *
 * Event Form
 *
 *
 * */
Event.directive('owEventForm',[
  function(){
    "use strict";
    return{
      scope:{
        event:'='
      },
      templateUrl:'./scripts/modules/event/templates/event.form.html',
      require: 'ngModel',
      controller:function($scope, EventService, Event){
       // console.log('Event Form Controller');

        $scope.editMode = false;

        $scope.editEvent = function(event){
          $scope.editMode = true;
          //console.log(JSON.stringify(event));
          //$state.go('/editevent/' + event._id);
        };

        $scope.magnitudes = [1,2,3,4,5,6,7,8,9,10];

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



          if (saveEventObj.id){
            saveEventObj.lastUpdate = Date.now();

            delete saveEventObj._id;
            Event.upsert(saveEventObj,
              function(response){
                console.log('Saved the event: ' + JSON.stringify(response));
                $scope.editMode = false;

              },
              function(response){
                console.log('bad update event: ' + JSON.stringify(response));
              }
            );


          }
          else{
            console.log('SAVE NEW SERVICE');

          }


        };
      },
      link:function(scope, element, attrs, ngModel){
       // console.log(scope, element, attrs);
//        console.log(ngModel);
//        console.log(ngModel.$modelValue);
        var render = function(){
       //   console.log('modelValue:', ngModel.$modelValue);
          scope.eventObj = ngModel.$modelValue;

        };


        scope.$watch(attrs['ngModel'], render);
        render();
      }
    }
  }
]);
/**
 *
 * Event Map
 *
 * */
Event.directive('owEventMap',[
  function(){
    "use strict";
    return{
      templateUrl:'./scripts/modules/event/templates/event.map.html',
      controller:function($scope,EventService, $timeout){

//        $scope.$watch('myMap', function(map) {
//          if (map) {
            $scope.myMarkers = [];
           // $scope.model = { myMap: undefined };

            $scope.mapOptions = {
              center: new google.maps.LatLng(51.784, -96.670),
              zoom: 4,
              mapTypeId: google.maps.MapTypeId.TERRAIN
            };

            var rawEventList = EventService.getRecentEvents({},
              function(response){
                console.log('RAW EVENT LIST Callback')

              },
              function(response){
                "use strict";
                console.log('bad get events');
              }
            );
        function getCircle(magnitude) {
//          var circle = {
//            path: google.maps.SymbolPath.CIRCLE,
//            scale: (magnitude * 3)
//          scale: Math.pow(2, (magnitude + .8)) / Math.PI,

//          };
//          return circle;
          var circle = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: .55,
            scale: (magnitude * 4),
            strokeColor: 'white',
            strokeWeight: .5
          };
          return circle;


        }
            $timeout(function(){
              angular.forEach(rawEventList,function(item){
                var newGMapPosition = new google.maps.LatLng(item.location.lat, item.location.lng);
                var map1 = $scope.myMap;
                $scope.myMarkers.push(new google.maps.Marker({
                  map: $scope.myMap,
                  position: newGMapPosition,
                  icon: getCircle(item.magnitude),
                  title: item.nearestCity + ', ' + item.stateProv,
                  description: item.blurb
                }));

              });
            },5000);
        console.log('wait for it....5, 4 , 3, 2, 1....');

            //$scope.myMarkers

            $scope.addMarker = function($event, $params) {
              $scope.myMarkers.push(new google.maps.Marker({
                map: $scope.myMap,
                position: $params[0].latLng
              }));
            };
            $scope.setMarkerPosition = function(marker, lat, lng) {
              marker.setPosition(new google.maps.LatLng(lat, lng));
              console.log()
            };
            $scope.setZoomMessage = function(zoom, lat, lng) {
              $scope.zoomMessage = 'You just zoomed to '+zoom+'!';
              console.log(zoom,'zoomed')
            };

            $scope.openMarkerInfo = function(marker) {
              $scope.currentMarker = marker;
              $scope.currentLocation = marker.title;
              $scope.currentMarkerLat = marker.getPosition().lat();
              $scope.currentMarkerLng = marker.getPosition().lng();
              $scope.currentDescription = marker.description;
              $scope.myInfoWindow.open($scope.myMap, marker);
            };
//          }
//        });




      },
      link:function(scope, element, attrs, ngModel){
        // console.log(scope, element, attrs);
//        console.log(ngModel);
//        console.log(ngModel.$modelValue);
        var render = function(){
          //   console.log('modelValue:', ngModel.$modelValue);
          scope.eventObj = ngModel.$modelValue;

        };


        scope.$watch(attrs['ngModel'], render);
        render();



      }
    }
  }

]);