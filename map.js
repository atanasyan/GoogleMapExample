function initTrack(map, track) {
  var trackPath = new google.maps.Polyline({
    path: track,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });

  trackPath.setMap(map);
}

function initInfo(map, infoPoints) {
  for (index = 0; index < infoPoints.length; index++) {
    var content = infoPoints[index].str + '<br/>' +
                  '<img src="' + infoPoints[index].img + '" class="img-info" />';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(infoPoints[index].lat,
                                         infoPoints[index].lon),
        map: map,
        title: infoPoints[index].str
    });

    var infoWin = new google.maps.InfoWindow()

    google.maps.event.addListener(marker,'click', (function(marker,content,infoWin){ 
        return function() {
           infoWin.setContent(content);
           infoWin.open(map, marker);
        };
    })(marker,content,infoWin)); 
  }
}

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(59.92510000, 30.32818000),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trackPoints = [
    new google.maps.LatLng(59.91780370, 30.34487120),
    new google.maps.LatLng(59.91780000, 30.34486000),
    new google.maps.LatLng(59.91787000, 30.34476000),
    new google.maps.LatLng(59.91784000, 30.34469000),
    new google.maps.LatLng(59.91788000, 30.34463000),
    new google.maps.LatLng(59.91720000, 30.34285000),
    new google.maps.LatLng(59.91967000, 30.33987000),
    new google.maps.LatLng(59.91962000, 30.33969000),
    new google.maps.LatLng(59.91974000, 30.33954000),
    new google.maps.LatLng(59.91947000, 30.33854000),
    new google.maps.LatLng(59.91946000, 30.33854000),
    new google.maps.LatLng(59.91915000, 30.33745000),
    new google.maps.LatLng(59.91994000, 30.33666000),
    new google.maps.LatLng(59.91994000, 30.33664000),
    new google.maps.LatLng(59.91994000, 30.33666000),
    new google.maps.LatLng(59.92069000, 30.33559000),
    new google.maps.LatLng(59.92060000, 30.33534000),
    new google.maps.LatLng(59.92066000, 30.33541000),
    new google.maps.LatLng(59.92053000, 30.33491000),
    new google.maps.LatLng(59.92060000, 30.33461000),
    new google.maps.LatLng(59.92062000, 30.33437000),
    new google.maps.LatLng(59.92060000, 30.33424000),
    new google.maps.LatLng(59.92163000, 30.33279000),
    new google.maps.LatLng(59.92162000, 30.33275000),
    new google.maps.LatLng(59.92166000, 30.33270000),
    new google.maps.LatLng(59.92163000, 30.33262000),
    new google.maps.LatLng(59.92169000, 30.33252000),
    new google.maps.LatLng(59.92176000, 30.33226000),
    new google.maps.LatLng(59.92183000, 30.33215000),
    new google.maps.LatLng(59.92179000, 30.33205000),
    new google.maps.LatLng(59.92184000, 30.33197000),
    new google.maps.LatLng(59.92190000, 30.33214000),
    new google.maps.LatLng(59.92184000, 30.33197000),
    new google.maps.LatLng(59.92198000, 30.33181000),
    new google.maps.LatLng(59.92192000, 30.33165000),
    new google.maps.LatLng(59.92196000, 30.33161000),
    new google.maps.LatLng(59.92200000, 30.33153000),
    new google.maps.LatLng(59.92209000, 30.33182000),
    new google.maps.LatLng(59.92456000, 30.32811000),
    new google.maps.LatLng(59.92449000, 30.32796000),
    new google.maps.LatLng(59.92440000, 30.32756000),
    new google.maps.LatLng(59.92442000, 30.32711000),
    new google.maps.LatLng(59.92446000, 30.32698000),
    new google.maps.LatLng(59.92456000, 30.32680000),
    new google.maps.LatLng(59.92446000, 30.32698000),
    new google.maps.LatLng(59.92444000, 30.32706000),
    new google.maps.LatLng(59.92437000, 30.32698000),
    new google.maps.LatLng(59.92444000, 30.32706000),
    new google.maps.LatLng(59.92442000, 30.32711000),
    new google.maps.LatLng(59.92440000, 30.32756000),
    new google.maps.LatLng(59.92443000, 30.32772000),
    new google.maps.LatLng(59.92452000, 30.32803000),
    new google.maps.LatLng(59.92460000, 30.32818000),
    new google.maps.LatLng(59.92472000, 30.32831000),
    new google.maps.LatLng(59.92486000, 30.32834000),
    new google.maps.LatLng(59.92500000, 30.32829000),
    new google.maps.LatLng(59.92510000, 30.32818000),
    new google.maps.LatLng(59.92514000, 30.32826000),
    new google.maps.LatLng(59.92601000, 30.33057000),
    new google.maps.LatLng(59.92602000, 30.33055000),
    new google.maps.LatLng(59.92640000, 30.33155000),
    new google.maps.LatLng(59.92639000, 30.33155000),
    new google.maps.LatLng(59.92724000, 30.33375000),
    new google.maps.LatLng(59.92726000, 30.33380000),
    new google.maps.LatLng(59.92730000, 30.33372000),
    new google.maps.LatLng(59.92797000, 30.33545000),
    new google.maps.LatLng(59.92828000, 30.33626000),
    new google.maps.LatLng(59.92825000, 30.33635000),
    new google.maps.LatLng(59.92828000, 30.33626000),
    new google.maps.LatLng(59.92927000, 30.33886000),
    new google.maps.LatLng(59.92926000, 30.33894000),
    new google.maps.LatLng(59.92927000, 30.33886000),
    new google.maps.LatLng(59.92952000, 30.33949000),
    new google.maps.LatLng(59.92999000, 30.34030000),
    new google.maps.LatLng(59.92967290, 30.34109470),
    new google.maps.LatLng(59.92999000, 30.34030000),
    new google.maps.LatLng(59.93129000, 30.34253000),
    new google.maps.LatLng(59.93172000, 30.34284000),
    new google.maps.LatLng(59.93304000, 30.34389000),
    new google.maps.LatLng(59.93303000, 30.34398000),
    new google.maps.LatLng(59.93320000, 30.34266000),
    new google.maps.LatLng(59.93327000, 30.34271000),
    new google.maps.LatLng(59.93326000, 30.34271000),
    new google.maps.LatLng(59.93348000, 30.34279000),
    new google.maps.LatLng(59.93370000, 30.34101000),
    new google.maps.LatLng(59.93529000, 30.34134000),
    new google.maps.LatLng(59.93547000, 30.34131000),
    new google.maps.LatLng(59.93546000, 30.34140000),
    new google.maps.LatLng(59.93547000, 30.34131000),
    new google.maps.LatLng(59.93598000, 30.34144000),
    new google.maps.LatLng(59.93597000, 30.34144000),
    new google.maps.LatLng(59.93638000, 30.34152000),
    new google.maps.LatLng(59.93605000, 30.33972000),
    new google.maps.LatLng(59.93587000, 30.33848000),
    new google.maps.LatLng(59.93585000, 30.33814000),
    new google.maps.LatLng(59.93612000, 30.33600000),
    new google.maps.LatLng(59.93610000, 30.33598000),
    new google.maps.LatLng(59.93612000, 30.33600000),
    new google.maps.LatLng(59.93712000, 30.32738000),
    new google.maps.LatLng(59.93535000, 30.32668000),
    new google.maps.LatLng(59.93546000, 30.32672000),
    new google.maps.LatLng(59.93637000, 30.31933000),
    new google.maps.LatLng(59.93632000, 30.31930000),
    new google.maps.LatLng(59.93653000, 30.31756000),
    new google.maps.LatLng(59.93650000, 30.31758000),
    new google.maps.LatLng(59.93653000, 30.31756000),
    new google.maps.LatLng(59.93708000, 30.31285000),
    new google.maps.LatLng(59.93689000, 30.31277000),
    new google.maps.LatLng(59.93692000, 30.31256000),
    new google.maps.LatLng(59.93689000, 30.31277000),
    new google.maps.LatLng(59.93708000, 30.31285000),
    new google.maps.LatLng(59.93710000, 30.31269000),
    new google.maps.LatLng(59.93714000, 30.31263000),
    new google.maps.LatLng(59.93733000, 30.31270000),
    new google.maps.LatLng(59.93816000, 30.31487000),
    new google.maps.LatLng(59.93798000, 30.31614000),
    new google.maps.LatLng(59.93797000, 30.31638000),
    new google.maps.LatLng(59.93798000, 30.31664000),
    new google.maps.LatLng(59.93803000, 30.31687000),
    new google.maps.LatLng(59.93813000, 30.31719000),
    new google.maps.LatLng(59.93823000, 30.31738000),
    new google.maps.LatLng(59.93834000, 30.31755000),
    new google.maps.LatLng(59.93843000, 30.31765000),
    new google.maps.LatLng(59.93857000, 30.31775000),
    new google.maps.LatLng(59.93930000, 30.31777000),
    new google.maps.LatLng(59.93942000, 30.31800000),
    new google.maps.LatLng(59.93974000, 30.31889000),
    new google.maps.LatLng(59.93974000, 30.31909000),
    new google.maps.LatLng(59.93988000, 30.31909000),
    new google.maps.LatLng(59.93986000, 30.31973000),
    new google.maps.LatLng(59.93995000, 30.31975000),
    new google.maps.LatLng(59.93994000, 30.32055000),
    new google.maps.LatLng(59.93986000, 30.32069000),
    new google.maps.LatLng(59.93982000, 30.32214000),
    new google.maps.LatLng(59.93974000, 30.32254000),
    new google.maps.LatLng(59.93963000, 30.32342000),
    new google.maps.LatLng(59.93962000, 30.32361000)
  ];

  initTrack(map, trackPoints);

  var infoPoints = [
    {lat: 59.93986000, lon: 30.31973000, str: "Двор 1", img: "111.jpg"},
    {lat: 59.91784000, lon: 30.34469000, str: "Двор 2", img: "111.jpg"},
  ];
 
  initInfo(map, infoPoints);
}
