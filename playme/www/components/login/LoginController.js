angular
  .module('playme')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$state'];

  function LoginController($scope, $state) {

    $scope.flipped = false;

  	$scope.flip = function() {
  		$scope.flipped = !$scope.flipped;

  	};

    $scope.login = function () {
      $state.go("playme.favorites");
    }

  } //fim do controller
