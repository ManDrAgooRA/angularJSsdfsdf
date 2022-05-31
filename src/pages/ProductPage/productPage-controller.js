
export function productPageCtrl($rootScope, $scope, $controller, $routeParams, $location, $http){
  $controller('httpCtrl', {$scope: $scope})
  $controller('productListCtrl', {$scope: $scope})

  $scope.getProduct = function(){
    $rootScope.isLoading = true;
    $scope.httpMetodGet(`http://localhost:3004/posts/${$routeParams.id}`);
  }
  
  $scope.backToList = function(){
    $location.path('/')
  }

  $scope.getProduct();
}