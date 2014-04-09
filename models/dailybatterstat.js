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
DailyBatterStat.afterRemote('find', function(ctx, user, next) {

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


    next();
  }
);