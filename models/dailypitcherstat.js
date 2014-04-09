/**
 * Created by seanbrookes on 2014-04-09.
 */
var loopback = require('loopback');
var app = require('../app');
var moment = require('moment');
var request = require('request');
var StatUpdate = app.models.statupdate;
var DailyPitcherStat = app.models.dailypitcherstat;
var Roster = app.models.roster;

DailyPitcherStat.beforeRemote('find', function(ctx, user, next) {

    next();
  }
);
DailyPitcherStat.afterRemote('find', function(ctx, user, next) {
//    console.log('|-------------------------------------------------------------  oh yeah baby 1');

    var filteredOut = new Array();
    var uniqueMLBIDArray = [];

    var internalResult = ctx.result;

    for (var i = 0;i < internalResult.length;i++){
      var tPlayer = internalResult[i];
      if (uniqueMLBIDArray.indexOf(tPlayer.mlbid) === -1){
        uniqueMLBIDArray.push(tPlayer.mlbid);
        filteredOut.push(tPlayer);
      }
    }
    ctx.result = filteredOut;

//    console.log(ctx.result);
//
//    console.log('|-------------------------------------------------------------  oh yeah baby 2');

    next();
  }
);