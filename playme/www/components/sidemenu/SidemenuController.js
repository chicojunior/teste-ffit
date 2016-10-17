angular
  .module('playme')
  .controller('SidemenuController', SidemenuController);

  SidemenuController.$inject = ['$scope'];

  function SidemenuController($scope) {

    $scope = $rootScope;


  } //fim do controller
