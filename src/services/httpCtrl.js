export function httpCtrl($rootScope, $scope, $http, $controller, $location){
  $controller('modalCtrl', {$scope: $scope});
  $scope.httpMessage;
  $scope.responseSuccess;
  $scope.responsePatchSuccess;
  $scope.allGoods;

  $scope.httpMetodGet = function(url){
    $rootScope.isLoading = true;
      $http({
        method: "GET",
        url,
        headers: {
          'Content-Type': 'aplication/json',
           Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
        }
      }).then(function mySuccess(response) {
        $rootScope.isLoading = false;
        $scope.responseSuccess = response.data;
      }).catch(function(e){
        if(e.status === -1 && e.data === null){
          $rootScope.message = 'Server doesn`t work please try later';
        } else if(e.status === 401){
          $rootScope.message = e.statusText;
        }
        $scope.openModal(e.statusText);
        $rootScope.isLoading = false;
      });
  }

  $scope.httpAllPost = function(){
    $rootScope.isLoading = true;
    $http({
      method: "GET",
      url: 'http://localhost:3004/posts',
      headers: {
        'Content-Type': 'aplication/json',
         Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
      }
    }).then(function mySuccess(response) {
      $rootScope.isLoading = false;
      $scope.responseSuccess = response.data;
    }).catch(function(e){
      if(e.status === -1 && e.data === null){
        $rootScope.message = 'Server doesn`t work please try later';
      } else if(e.status === 401){
        $rootScope.message = e.statusText;
        $rootScope.isLogin = false;
      }
      $scope.openModal(e.statusText);
      $rootScope.isLoading = false;
    });
  }

  $scope.httpMetodPatch = function(url, data){
      $http({
        method: "PATCH",
        url,
        data: JSON.stringify(data),
        options: {
          'Content-Type': 'aplication/json',
           Authorization: `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
        },
      }).then(function mySuccess(response) {
        $scope.responsePatchSuccess = response.data;
      }).catch(function(e){
        if(e.status === -1 && e.data === null){
          $rootScope.message = 'Server doesn`t work please try later';
        } else if(e.status === 401){
          $rootScope.message = e.statusText;
        }
        $scope.openModal(e.statusText);
        $rootScope.isLoading = false;
      });
  }
}