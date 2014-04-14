/**
 * Created by seanbrookes on 2014-04-13.
 *
 *
 * just pull the list of batters from mlb
 *
 * delete existing records
 *
 * add new record for each batter
 *
 */
var loopback = require('loopback');
var app = require('../app');
var moment = require('moment');
var request = require('request');
var RawBatters = app.models.rawbatterid;
var battersUrl = "http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2014&sort_order='desc'&sort_column='avg'&stat_type=hitting&page_type=SortablePlayer&game_type='R'&player_pool=ALL&season_type=ANY&league_code='AL'&sport_code='mlb'&results=1000&recSP=1&recPP=900";

RawBatters.beforeRemote('find', function(ctx, user, next) {

    console.log('TEST TEST TEST');

    request({uri: battersUrl}, function(err, response, body){

      console.log('|');
      console.log('|');
      console.log('|        wtf');
      console.log('|');
      console.log('|');
      console.log('|');

      if(err){
        console.log('Request error: ' + err);
        //return res.send(500,'there was an error: ' +response.statusCode  + ' : ' + err);
      }


      RawBatters.destroyAll({}, function(err) {
        if (err){
          console.log('error destroying all pitcher id records: ' + err);
        }

        // var urlObj2 = urlObj;
        var self = this;
        // var innerIndex2 = innerIndex;
        self.items = new Array();//I feel like I want to save my results in an array
        //Just a basic error check

        var payload = {};
        payload.data = body;
        payload.metadata = {};

        var statObj = JSON.parse(payload.data);

        var statsResult = statObj.stats_sortable_player.queryResults.row;



        for (var i = 0;i < statsResult.length;i++){
          var newRecord = {};
          var tPlayer = statsResult[i];

          newRecord.mlbid = tPlayer.player_id;
          newRecord.name = tPlayer.name_display_first_last;
          newRecord.team = tPlayer.team_abbrev;

          RawBatters.create(newRecord, function(err,doc){
            console.log('created batter record');
          })


          console.log('Batter : ' + tPlayer);
        }
        console.log('NEXT');
        next();


        // removed matching products
      });


    });

  }
);
