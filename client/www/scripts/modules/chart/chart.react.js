/** @jsx React.DOM */
ChartTestChart = React.createClass({
  render: function() {
    "use strict";
//    var items = function() {
//
//      return this.props.scope.totals[0].roster;
//    };
    var items = this.props.scope.totals.map(function(item) {
      return <div>{item.roster} :  {item.date}  : {item.grandTotal}</div>;
      }.bind(this));
    return <div>{items}</div>;
  }
});