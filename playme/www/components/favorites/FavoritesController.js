angular
  .module('playme')
  .controller('FavoritesController', FavoritesController);

  FavoritesController.$inject = ['$scope', '$state', '$ionicSideMenuDelegate'];

  function FavoritesController($scope, $state, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.items = [
      "Top Albums",
      "Bands",
      "Albums",
      "Playlists"
    ]

  } //fim do controller
