angular.module('Wait', ['ngMap', 'angularMoment', 'ngRoute'])

	.controller('MainCtrl', ['$scope', function($scope){
		$scope.markers = [{
			lat: 37.765278, 
			long: -122.450168,
			name: "Zazie",
			addr: "941 Cole St., San Francisco, CA 94117",
			hood: "Cole Valley",
			wait: [{text: "I was just told 30 min for two",
				   time: new Date ()}]
			},
			{
			lat: 37.782810, 
			long: -122.419031,
			name: "Brenda's",
			addr: "652 Polk St., San Francisco, CA 94102",
			hood: "Tenderloin",
			wait: [{text: "I was just told an hour for two",
				   time: new Date ()}]
			},
			{
			lat: 37.790874,  
			long: -122.418952,
			name: "Olea",
			addr: "1494 California St., San Francisco, CA 94109",
			hood: "Nob Hill",			
			wait: [{text: "There are 5 groups ahead of me",
			       time: new Date ()}]
			},
			{
			lat: 37.760148,  
			long: -122.504996,
			name: "Outerlands",
			addr: "4001 Judah St., San Francisco, CA 94122",
			hood: "Outer Sunset",
			wait: [{text: "Lines are insane",
			       time: new Date ()}]
			},
			{
			lat: 37.774894,   
			long: -122.437639,
			name: "Nopa",
			addr: "560 Divisadero St., San Francisco, CA 94117",
			hood: "NoPa",
			wait: [{text: "I was just told an hour for four",
			       time: new Date ()}]
			},
			{
			lat: 37.756431,  
			long: -122.419053 ,
			name: "Foreign Cinema",
			addr: "2534 Mission St., San Francisco, CA 94110",
			hood: "Mission",
			wait: [{text: "40 minutes for 2",
			       time: new Date ()}]
			},
			{
			lat: 37.753851, 
			long: -122.420750 ,
			name: "Beretta",
			addr: "1199 Valencia St., San Francisco, CA 94110",
			hood: "Mission",
			wait: [{text: "Too many people, couldn't even make it to the host stand",
			      time: new Date ()}]
			},
			{
			lat: 37.801448,   
			long: -122.409594,
			name: "Mama's",
			hood: "North Beach",
			addr: "1701 Stockton St., San Francisco, CA 94133",
			wait: [{text: "Line's about 20 people deep",
			       time: new Date ()}]
			},
			{
			lat: 37.761501,   
			long: -122.424318,
			name: "Tartine Bakery",
			addr: "600 Guerrero St., San Francisco, CA 94110",
			hood: "Mission",
			wait: [{text: "I've been here since 6am and still no bread'",
			       time: new Date ()}]
			},
			{
			lat: 37.762548,   
			long: -122.395519,
			name: "Plow",
			addr: "1299 18th St., San Francisco, CA 94107",
			hood: "Portrero Hill",
			wait: [{text: "I was just told 30 min for my group of 6",
			 	   time: new Date ()}]
			},
			{
			lat: 37.792545,  
			long: -122.4052774,
			name: "Sushirrito - Kearny St.",
			addr: "226 Kearny St., San Francisco, CA 94104",
			hood: "Financial District",
			wait: [{text: "About 10 other people before me",
				   time: new Date ()}]
			},
			{
			lat: 37.7616045,   
			long: -122.4257455,
			name: "Bi-Rite Creamery - Mission",
			addr: "3692 18th St.,San Francisco, CA 94110",
			hood: "Mission",
			wait: [{text: "No line at all!",
				   time: new Date ()}]
			},
			{
			lat: 37.7616045,   
			long: -122.4257455,
			name: "Ike's Place",
			addr: "3489 16th St., San Francisco, CA 94114",
			hood: "Mission",
			wait: [{text: "Last one of the day!",
				   time: new Date ()}]
			},
			{
			lat: 37.7909483,   
			long: -122.4210184,
			name: "Swan Oyster Depot",
			addr: "1517 Polk St., San Francisco, CA 94109",
			hood: "Lower Nob Hill",
			wait: [{text: "5 people ahead of me, one group of 4 behind me",
			       time: new Date ()}]
			}
		];

		$scope.submitWait = function(marker, newWait){
			marker.wait.push({
				text: newWait,
				time: new Date()
			});

			$scope.newWait = '';

		};


		$scope.$on('mapInitialized', function (event, map) {
	            $scope.objMapa = map;
	         });

		$scope.showInfoWindow = function (event, marker) {
	            var infowindow = new google.maps.InfoWindow();
	            var center = new google.maps.LatLng(marker.lat, marker.long);

	            infowindow.setContent(
	                '<h4>' + marker.name + '</h4>'+
	                '<h5>' + marker.addr + '</h5>'
	                );

	            infowindow.setPosition(center);
	            infowindow.open($scope.objMapa);
	         };

	  //   $scope.message = {
  	// 		text: 'I was told 5 minutes for 2.',
  	// 		time: new Date()
			// };




		
	}]);
