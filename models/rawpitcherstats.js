/**
 * Created by seanbrookes on 2014-04-01.
 */
var loopback = require('loopback');
var app = require('../app');
var rawpitcherstats = app.models.rawpitcherstats;
var rawpitcherid = app.models.rawpitcherid;
var request = require('request');
var battersUrl = "http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2014&sort_order='desc'&sort_column='avg'&stat_type=hitting&page_type=SortablePlayer&game_type='R'&player_pool=ALL&season_type=ANY&league_code='AL'&sport_code='mlb'&results=1000&recSP=1&recPP=900";
var pitchersUrl = "http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2014&sort_order='asc'&sort_column='era'&stat_type=pitching&page_type=SortablePlayer&game_type='R'&player_pool=ALL&season_type=ANY&league_code='AL'&sport_code='mlb'&results=1000&position='1'&recSP=1&recPP=900";

rawpitcherstats.stats = function(fn){
  var statsResult = {};


  request({uri: pitchersUrl}, function(err, response, body){

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
      var tPlayer = statsResult[i];
      var insertRawpitcher = {};
      console.log('---');
      console.log('|');
      console.log('Pitcher: [' + JSON.stringify(tPlayer) + '] ');
      console.log('|');
      console.log('Pitcher: [' + tPlayer.player_id + '][' + tPlayer.team_abbrev + '] ' + tPlayer.name_display_first_last);
      console.log('|');
      console.log('---');
      insertRawpitcher.name = tPlayer.name_display_first_last;
      insertRawpitcher.mlbid = tPlayer.player_id;
      insertRawpitcher.team = tPlayer.team_abbrev;
      insertRawpitcher.pos = tPlayer.pos;


//      rawpitcherid.create(insertRawpitcher,function(err,val){
//        if(err){
//          console.log('ERROR: ' + JSON.stringify(err));
//        }
//        console.log('added player: ' + JSON.stringify(val));
//      });



    }
// delete all if necessary
//    rawpitcherid.destroyAll({},function(err){
//      if(err){
//        console.log('ERROR: ' + JSON.stringify(err));
//      }
//      console.log('deleted all: ');
//    });


//    console.log(statsResult);




  });


  var err = null;

  fn(err, statsResult);
};

loopback.remoteMethod(
  rawpitcherstats.stats,
  {
    returns: {arg: 'stats', type: 'object'},
    http: {path: '/stats', verb: 'get'}
  }
);