angular
  .module('playme')
  .controller('AlbumsController', AlbumsController);

  AlbumsController.$inject = ['$scope'];

  function AlbumsController($scope) {

    $scope.albums = [
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


  } //fim do controller
