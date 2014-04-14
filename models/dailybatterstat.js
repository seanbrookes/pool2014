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