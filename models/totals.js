/**
 * Created by seanbrookes on 2014-04-13.
 */
var loopback = require('loopback');
var app = require('../app');
var moment = require('moment');
var Totals = app.models.totals;

Totals.beforeRemote('create', function(ctx, user, next) {

  var queryRoster = ctx.req.body.roster;
  var queryTotal = ctx.req.body.grandTotal;

  Totals.find({}, function(err, dox){
    if (err){
      console.log('error checking for totals record: ' + JSON.stringify(err));
      ctx.res.send(500, 'error checking for totals record: ' + err.message);
    }
    var createRecord = true;
    for (var i = 0;i < dox.length;i++){
      if ((queryRoster === dox[i].roster) && (queryTotal === dox[i].grandTotal)){
        createRecord = false;
        break;
      }
    }

    if (createRecord){
      // create new record
      Totals.create(ctx.req.body, function(err, dox){
        if (err){
          console.log('error adding totals: ' + err);
          ctx.res.send(500, 'error adding totals: ' + err.message);
        }
        ctx.res.send(200, 'total added');
      });
    }
    else {
      ctx.res.send(200,'no update');
    }
  });
});
