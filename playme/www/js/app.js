// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('playme', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login/login.html',
    controller: 'LoginController'
  })

  .state('topAlbums', {
    url: '/topAlbums',
    //templateUrl: 'templates/topAlbums/topAlbums.html',
    //controller: 'TopAlbumsController'
  })

  .state('albumsList', {
    url: '/albumsList',
    //templateUrl: 'templates/albumsList/albumsList.html',
    //controller: 'AlbumsListController'
  })

  .state('player', {
    url: '/player',
    //templateUrl: 'templates/player/player.html',
    //controller: 'PlayerController'
  });

  $urlRouterProvider.otherwise('/login');

})
