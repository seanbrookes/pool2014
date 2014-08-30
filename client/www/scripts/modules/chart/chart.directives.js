/**
 * Created by seanbrookes on 2014-05-31.
 */
Chart.directive('testChart', [
  function() {
    "use strict";
    return {
      link: function(scope, el, attrs) {
        scope.$watch('totals', function(oldVal, newVal) {
          var p  = newVal;
//          if (!newVal.$promise) {
//            React.renderComponent(ChartTestChart({scope:scope}), el[0]);
//          }

        });
      }
    }
  }
]);