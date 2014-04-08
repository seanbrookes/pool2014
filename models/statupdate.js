/**
 * Created by seanbrookes on 2014-04-04.
 */
var loopback = require('loopback');
var app = require('../app');
var moment = require('moment');
var request = require('request');
var StatUpdate = app.models.statupdate;
var Roster = app.models.roster;
var DailyBatterStat = app.models.dailybatterstat;
var DailyPitcherrStat = app.models.dailypitcherstat;
var Roster = app.models.roster;
var battersUrl = "http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2014&sort_order='desc'&sort_column='avg'&stat_type=hitting&page_type=SortablePlayer&game_type='R'&player_pool=ALL&season_type=ANY&league_code='AL'&sport_code='mlb'&results=1000&recSP=1&recPP=900";
var pitchersUrl = "http://mlb.mlb.com/pubajax/wf/flow/stats.splayer?season=2014&sort_order='asc'&sort_column='era'&stat_type=pitching&page_type=SortablePlayer&game_type='R'&player_pool=ALL&season_type=ANY&league_code='AL'&sport_code='mlb'&results=1000&position='1'&recSP=1&recPP=900";

StatUpdate.beforeRemote('create', function(ctx, user, next) {
  console.log('BEFORE CREATE IS DONE');

  var latestPitchingStats = [];
  var latestHittingStats = [];
  var pitchingStatCount = 0;
  var hittingStatCount = 0;
  var statsDate = Date.now();
  var rostersArray = [];
  var rosterNameArray = ['bashers','mashers','stallions','rallycaps'];

  function isInt(n) {
    return n % 1 === 0;
  }

  var getHitterTotal = function(hitter){
    var totalVal = 0;
    var baseValObj = {
      r:0,
      h:0,
      hr:0,
      sb:0,
      rbi:0
    };

    if (hitter.r) {
      baseValObj.r = hitter.r;
    }
    if (hitter.h) {
      baseValObj.h = hitter.h;
    }
    if (hitter.rbi) {
      baseValObj.rbi = hitter.rbi;
    }
    if (hitter.hr) {
      baseValObj.hr = hitter.hr;
    }
    if (hitter.sb) {
      baseValObj.sb = hitter.sb;
    }

    try {
      totalVal = ((parseInt(baseValObj.r)) + (parseInt(baseValObj.h) / 2) + (parseInt(baseValObj.rbi)) + (parseInt(baseValObj.hr) * 2) + (parseInt(baseValObj.sb) / 2));

    }
    catch(e){
      console.log('error calculating hitter total:  ' + e.message)
    }

    if (!isInt(totalVal)){
      totalVal = parseFloat(totalVal).toFixed(2);
    }
    return totalVal
  };
  var getStarterTotal = function(pitcher){
    var totalVal = 0;

    var baseValObj = {
      l:0,
      w:0,
      k:0
    };

    if (pitcher.l) {
      baseValObj.l = pitcher.l;
    }
    if (pitcher.w) {
      baseValObj.w = pitcher.w;
    }
    if (pitcher.k) {
      baseValObj.k = pitcher.k;
    }

    try{
      totalVal = ((baseValObj.w * 15) - (baseValObj.l * 4) + (baseValObj.k / 2));

    }
    catch(err){
      console.log('error calculating starter total: ' + err.message);
    }
    if (!isInt(totalVal)){
      totalVal = parseFloat(totalVal).toFixed(2);
    }
    return totalVal;
  };
  var getCloserTotal = function(pitcher){
    var totalVal = 0;
    var baseValObj = {
      sv:0,
      l:0,
      w:0,
      k:0,
      ip:0
    };
    if (pitcher.sv){
      baseValObj.sv = pitcher.sv;
    }
    if (pitcher.l) {
      baseValObj.l = pitcher.l;
    }
    if (pitcher.w) {
      baseValObj.w = pitcher.w;
    }
    if (pitcher.k) {
      baseValObj.k = pitcher.k;
    }
    if (pitcher.ip) {
      baseValObj.l = pitcher.ip;
    }
    totalVal = (baseValObj.sv * 7)  + (baseValObj.w * 6) + (baseValObj.k / 2) + (baseValObj.ip / 2);

    if (!isInt(totalVal)){
      totalVal = parseFloat(totalVal).toFixed(2);
    }
    return totalVal;


  };
  /*
  *
  *
  * MAIN LOOP
  *
  * ROSTERS
  *
  *
  * */
  Roster.find({}, function(err, dox){
    if (err){
      console.log('error finding rosters: ' + JSON.stringify(err));
    }
    rostersArray = dox;
    // get pitcher stats


    /*
    *
    *
    * PITCHER STATS
    *
    *
    * */
    request({uri: pitchersUrl}, function(err, response, body){

      if(err){
        console.log('pitcher Request error: ' + err);
        //return res.send(500,'there was an error: ' +response.statusCode  + ' : ' + err);
      }

      var pitchPayload = {};
      pitchPayload.data = body;
      pitchPayload.metadata = {};





      var pitcherStatObj = JSON.parse(pitchPayload.data);

      /*
      *
      *
      * STATS TIME STAMP
      *
      *
      * */
      statsDate =  moment(pitcherStatObj.stats_sortable_player.queryResults.created).format('YYYY MM DD');
//      statsDate =  '2014 04 06';


      /*
      *
      * ASSIGN PITCHING STATS VARIABLE
      *
      * */
      latestPitchingStats = pitcherStatObj.stats_sortable_player.queryResults.row;
      pitchingStatCount = latestPitchingStats.length;


      /*
      *
      * BATTING STATS
      *
      *
      * */
      // batters
      request({uri: battersUrl}, function(err, response, body){

        if(err){
          console.log('batter Request error: ' + err);
          //return res.send(500,'there was an error: ' +response.statusCode  + ' : ' + err);
        }


        var hitterPayload = {};
        hitterPayload.data = body;
        hitterPayload.metadata = {};

        var batterStatObj = JSON.parse(hitterPayload.data);

        latestHittingStats = batterStatObj.stats_sortable_player.queryResults.row;
        hittingStatCount = latestHittingStats.length;


        /*
        *
        * we have all the stats and rosters now we sholld be able to loop over them
        *
        *
        * */


        for (var i = 0;i < rostersArray.length;i++){
          var targetRoster = rostersArray[i];
          console.log('|------------------------------------');
          console.log('|');
          console.log('|');
          console.log('| start ROSTER [' + targetRoster.slug + '|');
          console.log('|');
          console.log('|');
          console.log('|------------------------------------');
          console.log('|');

          var rosterPlayers = targetRoster.players;

          for (var k = 0;k < rosterPlayers.length;k++){

            var currentPlayer = targetRoster.players[k];
            //console.log('DO STATS FOR THIS PLAYER [' + currentPlayer.posType + ']');

            var pI = 0; // pitcher iterator
            var hI = 0; // hitter iterator
            /*
            *
            *
            * HITTERS
            *
            * */
            // iterate over batting stats
            if (currentPlayer.posType === 'hitter'){
              for (hI = 0;hI < hittingStatCount;hI++){
                //console.log('THIS PLAYER IS A HITTER ' + latestHittingStats[hI].player_id );

                var currRawHitter = latestHittingStats[hI];
                // only worry about players that we have mlbid assignments for
                if (currentPlayer.mlbid){
                  /*
                  *
                  * MATCHING ROSTER HITTER
                  *
                  * */
                  if (currRawHitter.player_id === currentPlayer.mlbid){
                    console.log('[' + currentPlayer.name + ']');

                    var hitterStatPackageObj = {
                      date: statsDate,
                      lastUpdate: Date.now(),
                      mlbid: currentPlayer.mlbid,
                      name: currentPlayer.name,
                      roster: targetRoster.slug,
                      team: currRawHitter.team,
                      pos: currRawHitter.pos,
                      r: currRawHitter.r,
                      h: currRawHitter.h,
                      rbi: currRawHitter.rbi,
                      hr: currRawHitter.hr,
                      sb: currRawHitter.sb,
                      total:function(currRawHitter){
                        // calculate total
                        return 100;
                      }
                    };
//         player.total = ((parseInt(player.runs)) + (parseInt(player.hits) / 2) + (parseInt(player.rbi)) + (parseInt(player.hr) * 2) + (parseInt(player.sb) / 2));
//    starters         originalArray[i].total = ((originalArray[i].wins * 15) - (originalArray[i].losses * 4) + (originalArray[i].k / 2))
// closers             originalArray[i].total = ((originalArray[i].saves * 7)  + (originalArray[i].wins * 6) + (originalArray[i].k / 2) + (originalArray[i].ip / 2))


                 //   console.log('[' + JSON.stringify(hitterStatPackageObj) + ']');

                    hitterStatPackageObj.total = getHitterTotal(currRawHitter);


                    // add history record
                    // update player on roster
                    targetRoster.players[k] = hitterStatPackageObj;





                    break;
                  }
                }
              }
            }
            /*
            *
            * PITCHERS
            *
            * */
            else {
              for (pI = 0;pI < pitchingStatCount;pI++){
                var currRawPitcher = latestPitchingStats[pI];
               // console.log('currRawPitcher: ' + JSON.stringify(currRawPitcher));


                // only worry about players that we have mlbid assignments for
                if (currentPlayer.mlbid){
                  /*
                   *
                   * MATCHING ROSTER PITCHER
                   *
                   * */
                  if (currRawPitcher.player_id === currentPlayer.mlbid){
                    console.log('[' + currentPlayer.name + ']');


                    var pitcherStatPackageObj = {
                      date: statsDate,
                      lastUpdate: Date.now(),
                      mlbid: currentPlayer.mlbid,
                      name: currentPlayer.name,
                      roster: targetRoster.slug,
                      team: currRawPitcher.team,
                      pos: currRawPitcher.pos,
                      w: currRawPitcher.w,
                      l: currRawPitcher.l,
                      k: currRawPitcher.so,
                      ip: currRawPitcher.ip
                    };



                    var pitcherTotal = 0;
                    // figure out if closer or starter
                    if (currentPlayer.pos.toLowerCase() == 'sp'){
                      pitcherStatPackageObj.total = getStarterTotal(currRawPitcher);
                    }
                    else if (currentPlayer.pos.toLowerCase() === 'rp'){
                      pitcherStatPackageObj.total = getCloserTotal(currRawPitcher);
                    }
                    else {
                      console.log('cannot determine pitcher type:' + JSON.stringify(currentPlayer) );
                    }

                 //   console.log('PITCHER [' + JSON.stringify(pitcherStatPackageObj) + ']');

                    // add history record
                    // update player on roster
                    targetRoster.players[k] = pitcherStatPackageObj;


                    break;
                  }
                }
              }
            }



            // iterate over pitching stats

          }

          console.log('|');
          console.log('| end save this roster [' + targetRoster.slug + ']');
          console.log('|');

          Roster.updateOrCreate(targetRoster, function(err, doc){
            if (err){
              console.log('error saving roster after update: ' + JSON.stringify(err));
            }
            console.log('success save: ' + JSON.stringify(doc));
          });

        }



      });

    });
  });
//
//
//
//
//
//
//    // pitchers
//    request({uri: pitchersUrl}, function(err, response, body){
//
//      if(err){
//        console.log('pitcher Request error: ' + err);
//        //return res.send(500,'there was an error: ' +response.statusCode  + ' : ' + err);
//      }
//
//      // var urlObj2 = urlObj;
//      var self = this;
//      // var innerIndex2 = innerIndex;
//      self.items = new Array();//I feel like I want to save my results in an array
//      //Just a basic error check
//
//      var payload = {};
//      payload.data = body;
//      payload.metadata = {};
//
//      var statObj = JSON.parse(payload.data);
//
//      // statsDate = statObj.stats_sortable_player.queryResults.created;
//      statsDate =  moment(statObj.stats_sortable_player.queryResults.created).format('YYYY MM DD');
//
//
//      latestPitchingStats = statObj.stats_sortable_player.queryResults.row;
//
//        // iterate rosters
//        for (var k = 0;k < dox.length;k++){
//          var tRoster = dox[k];
//          // iterate players
//          for (var p = 0;p < tRoster.players.length;p++){
//            var rosterPitcher = tRoster.players[p];
//            // iterate over raw stats
//            for (var i = 0;i < latestPitchingStats.length;i++){
//              var rawPitcherInstance = latestPitchingStats[i];
//              if (rosterPitcher.mlbid === rawPitcherInstance.player_id){
//                /*
//                 *
//                 *
//                 * [ PITCHER ]  This is a matched roster pitcher with a mlb player id
//                 *
//                 *
//                 *
//                 * */
//                console.log('pitcher match: [' + tRoster.slug + ']' + rosterPitcher.name);
//
//                var currTotal = function(obj){
//                  return 100;
//                };
//
//                var pitcherStatPackageObj = {
//                  date: statsDate,
//                  lastUpdate: Date.now(),
//                  mlbid: rosterPitcher.mlbid,
//                  name: rosterPitcher.name,
//                  roster: tRoster.slug,
//                  team: rawPitcherInstance.team,
//                  pos: rawPitcherInstance.pos,
//                  w: rawPitcherInstance.w,
//                  l: rawPitcherInstance.l,
//                  k: rawPitcherInstance.so,
//                  ip: rawPitcherInstance.ip,
//                  total:currTotal
//                };
//                console.log('|');
//                console.log('|');
//                console.log('create this pitcher record: ' + JSON.stringify(pitcherStatPackageObj));
//                console.log('|');
//                console.log('|');
//
//
//
//                /*
//                 *
//                 * UPDATE ROSTER
//                 *
//                 *
//                 * ADD DATE RECORD FOR PLAYER
//                 *
//                 *
//                 * */
//
//
//  //              var batterStatPackage = DailyBatterStat.create(
//  //                hitterStatPackageObj,
//  //                function(err,doc){
//  //                  if (err){
//  //                    console.log('error adding stat ' + JSON.stringify(err));
//  //                  }
//  //                  console.log('added daily stat');
//  //                }
//  //              );
//              }
//            }
//          }
//        }
//      });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//    Roster.find({}, function(err, dox){
//      if (err){
//        console.log('error finding rosters: ' + JSON.stringify(err));
//      }
//      // iterate rosters
//      for (var k = 0;k < dox.length;k++){
//        var tRoster = dox[k];
//        // iterate players
//        for (var p = 0;p < tRoster.players.length;p++){
//          var rosterBatter = tRoster.players[p];
//          // iterate over raw stats
//          for (var i = 0;i < latestHittingStats.length;i++){
//            var rawBatterInstance = latestHittingStats[i];
//            if (rosterBatter.mlbid === rawBatterInstance.player_id){
//              /*
//               *
//               *
//               * [ HITTER ]  This is a matched roster batter with a mlb player id
//               *
//               *
//               *
//               * */
//              console.log('batter match: [' + tRoster.slug + ']' + rosterBatter.name);
//
//              var hitterStatPackageObj = {
//                date: statsDate,
//                lastUpdate: Date.now(),
//                mlbid: rosterBatter.mlbid,
//                name: rosterBatter.name,
//                roster: tRoster.slug,
//                team: rawBatterInstance.team,
//                pos: rawBatterInstance.pos,
//                r: rawBatterInstance.r,
//                h: rawBatterInstance.h,
//                rbi: rawBatterInstance.rbi,
//                hr: rawBatterInstance.hr,
//                sb: rawBatterInstance.sb,
//                total:function(rawHitter){
//                  // calculate total
//                  return 100;
//                }
//              };
//              console.log('|');
//              console.log('|');
//              console.log('create this batter record: ' + JSON.stringify(hitterStatPackageObj));
//              console.log('|');
//              console.log('|');
//
//
//
//
//            }
//          }
//        }
//      }
//    });
//    // iterate rosters
//    for (var k = 0;k < dox.length;k++){
//      var tRoster = dox[k];
//      // iterate players
//      for (var p = 0;p < tRoster.players.length;p++){
//        var rosterPitcher = tRoster.players[p];
//        // iterate over raw stats
//        for (var i = 0;i < latestPitchingStats.length;i++){
//          var rawPitcherInstance = latestPitchingStats[i];
//          if (rosterPitcher.mlbid === rawPitcherInstance.player_id){
//            /*
//             *
//             *
//             * [ PITCHER ]  This is a matched roster pitcher with a mlb player id
//             *
//             *
//             *
//             * */
//            console.log('pitcher match: [' + tRoster.slug + ']' + rosterPitcher.name);
//
//            var currTotal = function(obj){
//              return 100;
//            };
//
//            var pitcherStatPackageObj = {
//              date: statsDate,
//              lastUpdate: Date.now(),
//              mlbid: rosterPitcher.mlbid,
//              name: rosterPitcher.name,
//              roster: tRoster.slug,
//              team: rawPitcherInstance.team,
//              pos: rawPitcherInstance.pos,
//              w: rawPitcherInstance.w,
//              l: rawPitcherInstance.l,
//              k: rawPitcherInstance.so,
//              ip: rawPitcherInstance.ip,
//              total:currTotal
//            };
//            console.log('|');
//            console.log('|');
//            console.log('create this pitcher record: ' + JSON.stringify(pitcherStatPackageObj));
//            console.log('|');
//            console.log('|');
//
//
//
//            /*
//             *
//             * UPDATE ROSTER
//             *
//             *
//             * ADD DATE RECORD FOR PLAYER
//             *
//             *
//             * */
//
//
//            //              var batterStatPackage = DailyBatterStat.create(
//            //                hitterStatPackageObj,
//            //                function(err,doc){
//            //                  if (err){
//            //                    console.log('error adding stat ' + JSON.stringify(err));
//            //                  }
//            //                  console.log('added daily stat');
//            //                }
//            //              );
//          }
//        }
//      }
//    }
//
//
//
//
//
//
//
//
//
//
//
//
//  // pitchers and batters

  // iterate over the rosteers



  next();
});

StatUpdate.afterRemote('create', function(ctx, user, next) {
  console.log('AFTER CREATE IS DONE');
  next();
});