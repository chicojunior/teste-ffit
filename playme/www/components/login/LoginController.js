angular
  .module('playme')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$state'];

  function LoginController($scope, $state) {

    $scope.login = function () {
      $state.go("favorites");
    }

  } //fim do controller
