if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ v: '3', key: 'AIzaSyCzTJ8r6Q7xg0AsI3NHkSWKir-K4W8lkcI', libraries: 'geometry,places' });
  });
}



Template.home.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-7.127605,112.3937185),
        zoom: 12
      };
    }
  }
  
});

//<h3>Sukorame</h3><br><h5>Blewah</h5><br>8.780 Ton/Tahun<button id="popSukorame" class="button button-block button-stable">details</a>
Template.home.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
                   var locations = [
                                    ['Sukorame', -7.344954,112.110199, 'Blewah<br>8.780 Ton/Tahun'],
                                    ['Bluluk', -7.3014585,112.1256415, 'Blewah<br>10.080 Ton/Tahun #1'],
                                    ['Ngimbang', -7.2967426,112.1936549, 'Bawang Merah<br>169 Ton/Tahun #1'],
                                    ['Sambeng', -7.289334,112.28577, 'Kelapa<br>24 Ton/Tahun'],
                                    ['Mantup', -7.27292,112.354698, 'Blimbing<br>81 Ton/Tahun #1<br><br>Tebu<br>116.661 Ton/Tahun'],
                                    ['Kembangbahu', -7.2083896,112.35756, 'Pepaya<br>282 Ton/Tahun #1<br><br>Kangkung<br>2.594 Ton/Tahun #1'],
                                    ['Sugio', -7.18593,112.27823, 'Padi<br>82.436 Ton/Tahun #1<br><br>Nangka<br>1.348 Ton/Tahun #1'],
                                    ['Kedungpring', -7.1916677,112.199654, 'Pepaya<br>108 Ton/Tahun'],
                                    ['Modo', -7.2016595,112.1320051, 'Padi<br>63.174 Ton/Tahun #1'],
                                    ['Babat', -7.109076,112.209705, 'Cabe Besar<br>18 Ton/Tahun #1<br><br>Terong<br>1.210 Ton/Tahun'],
                                    ['Pucuk', -7.091127,112.29506, 'Jambu Biji<br>66 Ton/Tahun'],
                                    ['Sukodadi', -7.112755,112.34011, 'Ketimun<br>0,02 Ton/Tahun'],
                                    ['Tikung', -7.1888362,112.410303, 'Jambu Biji<br>53 Ton/Tahun'],
                                    ['Sarirejo', -7.1721341,112.4611965, 'Mangga<br>201 Ton/Tahun'],
                                    ['Deket', -7.0957664,112.4586849, 'Kacang Panjang<br>12 Ton/Tahun'],
                                    ['Glagah', -7.078613,112.5022179, 'Tomat<br>15 Ton/Tahun'],
                                    ['Karangbinangun', -7.033743,112.4645379, 'Blimbing<br>7 Ton/Tahun'],
                                    ['Turi', -7.06851,112.3868205, 'Mangga<br>24 Ton/Tahun'],
                                    ['Kalitengah', -7.0212931,112.393738, 'Mangga<br>1.513 Ton/Tahun #1'],
                                    ['Karanggeneng', -6.997649,112.3715464, 'Tomat<br>14 Ton/Tahun'],
                                    ['Sekaran', -7.051962,112.2746015, 'Semangka<br>5.530 Ton/Tahun #1'],
                                    ['Maduran', -7.0050665,112.2715306, 'Cabe Besar<br>16 Ton/Tahun'],
                                    ['Laren', -6.978902,112.28871, 'Melon<br>168 Ton/Tahun #1'],
                                    ['Solokuro', -6.928627,112.3520349, 'Kacang Panjang<br>28 Ton/Tahun #1<br><br>Ketimun<br>0,4 Ton/Tahun #1<br><br>Jeruk Siam<br>26 Ton/Tahun<br><br>Tomat<br>28 Ton/Tahun'],
                                    ['Paciran', -6.8894135,112.374247, 'Cabe Rawit<br>19.757 Ton/Tahun #1<br><br>Jambu Air<br>66 Ton/Tahun #1<br><br>Jambu Biji<br>130 Ton/Tahun #1<br><br>Siwalan<br>28 Ton/Tahun'],
                                    ['Brondong', -6.8827199,112.271004, 'Kelapa<br>33 Ton/Tahun #1'],
                                    ['Lamongan', -7.1228674,112.3941885, 'Jambu Air<br>20 Ton/Tahun'],
                                    
                                    ];
                   var infowindow = new google.maps.InfoWindow();
                   var marker, i;
/* kode untuk menampilkan banyak marker */
                  for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                                                   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                                   map: map.instance,
                                                   //icon: 'grad-icon.png'
                    });

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                      return function() {
                        IonPopup.show({
                          title: locations[i][0],
                          template: locations[i][3],
                          buttons: [{
                            text: 'Tutup',
                            type: 'button-positive',
                            onTap: function() {
                              IonPopup.close();
                            }
                          }]
                        });
                        /*infowindow.setContent({{> popSukorame}});
                        infowindow.open(map.instance, marker);*/
                      }
                    })(marker, i));

                    var infowindow = new google.maps.InfoWindow({
                        content: locations[i][0],
                        disableAutoPan: true
                    });
                    infowindow.open(map.instance, marker);
                  };

                   //var marker = new google.maps.Marker({
      //position: map.options.center,
      //map: map.instance
    //});
    navigator.geolocation.watchPosition(function (pos) {
       //Every time we get a new location from the gps, make a new marker on the map
        new google.maps.Marker({
           position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
           map: map.instance,
           animation: google.maps.Animation.BOUNCE,
       });
    }),
    
    function (err) {
       console.log("GPS ERROR", err);
    };
  });
});

Template.home.rendered = function(){
   $( "#popSukorame" ).click(function() {
                    alert('asdasds');
                  });
};