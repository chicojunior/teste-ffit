(function() {

  angular
    .module('playme')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope'];

    function LoginController($scope) {

      function login() {
        if ($scope.user != "" && $scope.pass != "")
        $state.go("topAlbums");
      } else {
        console.log("Animação de erro!");
      }

    }


})(); //fim do controller

  // .controller('LoginController', function($scope) {
  //
  // })
