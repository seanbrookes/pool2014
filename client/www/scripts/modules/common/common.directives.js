/**
 * Created by seanbrookes on 2014-04-11.
 */
Common.directive('grandTotalsSummaryList', [
  'Totals',
  function(Totals){
    return{
      templateUrl: './scripts/modules/common/templates/totals.list.html',
      replace: true,
      controller:[
        '$scope',
        function($scope){
          var filter = {
            'filter[order]':'date DESC'
          };

          var initTotals = Totals.query(filter);
          initTotals.$promise.
            then(function (result) {
              var beginArray = result;
              var returnArray = [];

              var totalsComparitorObj = {
                bashers:{
                  latest:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  },
                  previous:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  }
                },
                mashers:{
                  latest:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  },
                  previous:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  }
                },
                rallycaps:{
                  latest:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  },
                  previous:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  }
                },
                stallions:{
                  latest:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  },
                  previous:{
                    grandTotal:0,
                    hitterTotal:0,
                    starterTotal:0,
                    closerTotal:0
                  }
                }

              };
              var latestDate;
              var previousDate;
              var rosterChecklist = [];
              for (var i = 0;i  <  beginArray.length;i++){
                var currTotalRecord = beginArray[i];
                if (!latestDate){
                  latestDate = beginArray[0].date;
                  previousDate = moment(latestDate).subtract('days',1).format('YYYY-MM-DD');
                  console.log('dates: ' + latestDate + ':' + moment(previousDate).format('YYYY-MM-DD'));
                }
                switch(currTotalRecord.roster){

                  case 'bashers':
                    if (currTotalRecord.date === latestDate){
                      if (!totalsComparitorObj.bashers.latest.date){
                        totalsComparitorObj.bashers.latest.date = currTotalRecord.date;
                        totalsComparitorObj.bashers.latest.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.bashers.latest.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.bashers.latest.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.bashers.latest.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    if (currTotalRecord.date === previousDate){
                      if (!totalsComparitorObj.bashers.previous.date){
                        totalsComparitorObj.bashers.previous.date = currTotalRecord.date;
                        totalsComparitorObj.bashers.previous.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.bashers.previous.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.bashers.previous.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.bashers.previous.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    break;
                  case 'mashers':
                    if (currTotalRecord.date === latestDate){
                      if (!totalsComparitorObj.mashers.latest.date){
                        totalsComparitorObj.mashers.latest.date = currTotalRecord.date;
                        totalsComparitorObj.mashers.latest.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.mashers.latest.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.mashers.latest.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.mashers.latest.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    if (currTotalRecord.date === previousDate){
                      if (!totalsComparitorObj.mashers.previous.date){
                        totalsComparitorObj.mashers.previous.date = currTotalRecord.date;
                        totalsComparitorObj.mashers.previous.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.mashers.previous.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.mashers.previous.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.mashers.previous.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    break;
                  case 'rallycaps':
                    if (currTotalRecord.date === latestDate){
                      if (!totalsComparitorObj.rallycaps.latest.date){
                        totalsComparitorObj.rallycaps.latest.date = currTotalRecord.date;
                        totalsComparitorObj.rallycaps.latest.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.rallycaps.latest.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.rallycaps.latest.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.rallycaps.latest.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    if (currTotalRecord.date === previousDate){
                      if (!totalsComparitorObj.rallycaps.previous.date){
                        totalsComparitorObj.rallycaps.previous.date = currTotalRecord.date;
                        totalsComparitorObj.rallycaps.previous.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.rallycaps.previous.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.rallycaps.previous.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.rallycaps.previous.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    break;
                  case 'stallions':
                    if (currTotalRecord.date === latestDate){
                      if (!totalsComparitorObj.stallions.latest.date){
                        totalsComparitorObj.stallions.latest.date = currTotalRecord.date;
                        totalsComparitorObj.stallions.latest.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.stallions.latest.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.stallions.latest.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.stallions.latest.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    if (currTotalRecord.date === previousDate){
                      if (!totalsComparitorObj.stallions.previous.date){
                        totalsComparitorObj.stallions.previous.date = currTotalRecord.date;
                        totalsComparitorObj.stallions.previous.grandTotal = currTotalRecord.grandTotal;
                        totalsComparitorObj.stallions.previous.hitterTotal = currTotalRecord.hitterTotal;
                        totalsComparitorObj.stallions.previous.starterTotal = currTotalRecord.starterTotal;
                        totalsComparitorObj.stallions.previous.closerTotal = currTotalRecord.closerTotal;
                      }
                    }
                    break;
                  default:



                }
//
//                currTotalRecord.grandTotalDelta = getGrandTotalDelta(currTotalRecord.roster,totalsComparitorObj);
//
//                returnArray.push(currTotalRecord);

              }
              for (var k = 0;k  <  beginArray.length;k++){
                currTotalRecord = beginArray[k];


                currTotalRecord.grandTotalDelta = getGrandTotalDelta(currTotalRecord.roster,totalsComparitorObj);

                returnArray.push(currTotalRecord);

              }




















              console.log('COMPARITOR: ' + JSON.stringify(totalsComparitorObj));

              $scope.grandTotals = returnArray;

            }
          );
          var getGrandTotalDelta = function(roster, compObj){
            if (compObj[roster].previous.grandTotal !== 0){
              return (compObj[roster].latest.grandTotal - compObj[roster].previous.grandTotal);
            }
          }
        }
      ]
    }
  }
]);
Common.directive('posRankNavList', [
  function() {
    return {
      templateUrl: './scripts/modules/common/templates/pos.rank.nav.list.html',
      replace: true,
      controller:function(){}
    }
  }
]);
Common.directive('generalTotalsSummaryList', [
  'Totals',
  function(Totals){
    return{
      templateUrl: './scripts/modules/common/templates/general.totals.html',
      controller:[
        '$scope',
        function($scope){
          var filter = {};

          $scope.rosters = Totals.query(filter);
          $scope.rosters.$promise.
            then(function (result) {
              $scope.rosters = result;

            }
          );


        }
      ]
    }
  }
]);