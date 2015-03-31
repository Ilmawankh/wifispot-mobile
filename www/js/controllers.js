angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TourCtrl', function($scope, $http) {

  $http.get("http://10.16.5.101:1337/map")
      .success(function(data) {
        console.log(data);
        $scope.playlists = data;
  })

})


.controller('PlaylistsCtrl', function($scope, $http) {

  $http.get("http://10.16.5.101:1337/map/find?corregimiento=bella%20vista")
      .success(function(data) {
        console.log(data);
        $scope.playlists = data;
  })

})

.controller('ChiriquiCtrl', function($scope, $http) {

  $http.get("http://10.16.5.101:1337/map/find?distrito=david")
      .success(function(data) {
        console.log(data);
        $scope.playlists = data;
  })

})

.controller('BocasCtrl', function($scope, $http) {

  $http.get("http://10.16.5.101:1337/map/find?provincia=herrera")
      .success(function(data) {
        console.log(data);
        $scope.playlists = data;
  })

})

.controller('PlaylistCtrl', function($scope, $stateParams, $http) {
  $http.get("http://10.16.5.101:1337/map/"+$stateParams.id)
      .success(function(data) {
        console.log(data);
        $scope.spot = data;
        $scope.map = { center: { latitude: data.latitud, longitude: data.longitud }, zoom: 16, draggable : 'false', dragging : 'false' };

        $scope.marker = {
          id: 0,
          coords: {
            latitude: data.latitud,
            longitude: data.longitud
          },
          options: { draggable: false },
          events: {
            /*dragend: function (marker, eventName, args) {
              $log.log('marker dragend');
              var lat = marker.getPosition().lat();
              var lon = marker.getPosition().lng();
              $log.log(lat);
              $log.log(lon);

              $scope.marker.options = {
                draggable: false,
                labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                labelAnchor: "100 0",
                labelClass: "marker-labels"
              };
            }*/
          }
        };
  })
});
