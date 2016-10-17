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

  .state('playme', {
    url: '/playme',
    abstract: true,
    templateUrl: 'components/home/home.html',
    controller: 'HomeController'
  })

  .state('playme.favorites', {
    url: '/favorites',
    views: {
        'menuContent': {
          templateUrl: 'components/favorites/favorites.html',
          controller: 'FavoritesController'
        }
      }
  })

  .state('playme.albums', {
    url: '/albums',
    views: {
        'menuContent': {
          templateUrl: 'components/albums/albums.html',
          controller: 'AlbumsController'
        }
      }
  })

  .state('playme.player', {
    url: '/player',
    views: {
        'menuContent': {
          templateUrl: 'components/player/player.html',
          controller: 'PlayerController'
        }
      }
  });

  $urlRouterProvider.otherwise('/login');

})
