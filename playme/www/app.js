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
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
  })

  .state('favorites', {
    url: '/favorites',
    templateUrl: 'components/favorites/favorites.html',
    controller: 'FavoritesController'
  })

  .state('albums', {
    url: '/albums',
    //templateUrl: 'components/albums/albums.html',
    //controller: 'AlbumsController'
  })

  .state('player', {
    url: '/player',
    //templateUrl: 'components/player/player.html',
    //controller: 'PlayerController'
  });

  $urlRouterProvider.otherwise('/login');

})
