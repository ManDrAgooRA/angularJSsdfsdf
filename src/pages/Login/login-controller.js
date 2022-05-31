import { setLocalStorage } from "../../utils";

export function loginCtrl($rootScope, $scope, $http, $controller, $location){
  $controller('modalCtrl', {$scope: $scope})
  $controller('mainCtrl', {$scope: $scope})
  $scope.email = '',
  $scope.password = '',

  $scope.login = function(email, password){
    $rootScope.isLoading = true;
    $http({
      method: 'POST',
      url: 'http://localhost:3004/login',
      data: JSON.stringify({email, password})
    }).then(function mySuccess(response) {
      $rootScope.user = response.data.user;
      $rootScope.token = response.data.accessToken;
      $rootScope.isLogin = true;
      $location.path('/');

      setLocalStorage('user', response.data.user);
      setLocalStorage('accessToken', response.data.accessToken);
      setLocalStorage('isLogin', $rootScope.isLogin);
      $rootScope.isLoading = false;
      
    }, function myError(response) {
      $rootScope.message = response.data;
      $scope.openModal(response.data);
      $rootScope.isLoading = false;
  });
  }
}
