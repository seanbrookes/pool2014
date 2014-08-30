/**
 * Created by seanbrookes on 2014-04-09.
 */
var loopback = require('loopback');
var app = require('../app');
var moment = require('moment');
var request = require('request');
var StatUpdate = app.models.statupdate;
var DailyBatterStat = app.models.dailybatterstat;
var Roster = app.models.roster;

DailyBatterStat.beforeRemote('find', function(ctx, user, next) {

    next();
  }
);
DailyBatterStat.beforeRemote('deleteById', function(ctx, user, next) {
console.log('TEST BEFORE REMOTE DELETE');
    next();
  }
);
DailyBatterStat.afterRemote('find', function(ctx, user, next) {

    var filteredOut = new Array();
    var uniqueMLBIDArray = [];

    // get the month and day
    var currentDate = new Date();

    var internalResult = ctx.result;

    for (var i = 0;i < internalResult.length;i++){
      var tPlayer = internalResult[i];

      var playerMonth = new Date(tPlayer.date).getMonth();
      var playerDate = new Date(tPlayer.date).getDate();
      var currMonth = new Date().getMonth();
      var currDate = new Date().getDate();

//      console.log('player date: ' + playerMonth + ':' + playerDate);
//      console.log('currentDate: ' +  currMonth + ':' + currDate);
      if (parseInt(playerMonth) >= parseInt(currMonth)) {
        if (parseInt(playerDate) >= parseInt(currDate)) {
          if (uniqueMLBIDArray.indexOf(tPlayer.mlbid) === -1){
            console.log(tPlayer.date + ' : ' + tPlayer.name + ' : ' + tPlayer.mlbid);
            uniqueMLBIDArray.push(tPlayer.mlbid);
            filteredOut.push(tPlayer);
          }
        }
        else {
          //console.log('| A dates do not match p[' + tPlayer.date  + '] c[' + currentDate + ']');
        }
      }
      else {
        //console.log('| B dates do not match p[' + tPlayer.date  + '] c[' + currentDate + ']');
      }


    }
    ctx.result = filteredOut;

//    console.log(ctx.result);


    next();
  }
);

DailyBatterStat.raw = function(callback){

  DailyBatterStat.find({}, function(err, dox){
    if (err){
      callback(err);
    }
    console.log('check this');
    callback(null, dox);

  });
};

loopback.remoteMethod(
  DailyBatterStat.raw,
  {
    returns: {arg: 'stats', type: 'array'},
    http: {path: '/raw', verb: 'get'}
  }
);