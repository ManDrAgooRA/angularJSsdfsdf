export function productListCtrl($rootScope, $scope, $controller, $location){
  $controller('modalCtrl', {$scope: $scope})
  $controller('httpCtrl', {$scope: $scope})
  $scope.goodsTitle = 'title';
  $scope.allGoods;
  $scope.currentId;

  $scope.getAllGoods = function(){
    $rootScope.isLoading = true;
    $scope.httpMetodGet('http://localhost:3004/posts');
  }

  $scope.showId = function(id){
    $location.path(`/products/${id}`)
  }

  $scope.getAllGoods();
}