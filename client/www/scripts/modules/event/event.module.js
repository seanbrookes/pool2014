/**
 * Created by seanbrookes on 2014-01-29.
 *
 * Geocode reference: http://geocoder.ca/
 * - http://itouchmap.com/
 * - http://itouchmap.com/latlong.html
 *
 * Geodata ref: http://canadiangis.com/data.php
 *
 * Dataset request: http://data.gc.ca/eng/suggested-datasets/occurrence-statistics
 *
 * national railway network: http://www.geobase.ca/geobase/en/data/nrwn/index.html
 *
 */
function onGoogleReady() {
  console.log('Google maps api initialized.');
  angular.bootstrap(document.getElementById('map'), ['Event']);
}
var Event = angular.module('Event',[]);