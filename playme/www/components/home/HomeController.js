angular
  .module('playme')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', '$ionicSideMenuDelegate'];

  function HomeController($scope, $state, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

  } //fim do controller
