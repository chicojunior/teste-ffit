angular
  .module('playme')
  .controller('FavoritesController', FavoritesController);

  FavoritesController.$inject = ['$scope', '$state', '$ionicSideMenuDelegate'];

  function FavoritesController($scope, $state, $ionicSideMenuDelegate) {

    $scope.favorites = [
      {
        cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Metallica_-_Kill_'Em_All_cover.jpg",
        artist: "Metallica",
        album: "Kill'em All",
        duration: "51:18"
      },
      {
        cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Metallica_-_Kill_'Em_All_cover.jpg",
        artist: "Metallica",
        album: "Kill'em All",
        duration: "51:18"
      },
      {
        cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Metallica_-_Kill_'Em_All_cover.jpg",
        artist: "Metallica",
        album: "Kill'em All",
        duration: "51:18"
      }
    ];

    // $scope.toggleLeft = function() {
    //   $ionicSideMenuDelegate.toggleLeft();
    // };

  } //fim do controller
