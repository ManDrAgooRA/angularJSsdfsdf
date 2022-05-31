import { setLocalStorage } from "../../utils";

export function addToCartCtrl($rootScope, $scope, $controller, $routeParams, $location){
  $controller('httpCtrl', {$scope: $scope})
  $scope.cartName = 'Cart name'
  $scope.id = $routeParams.id ? $routeParams.id : $scope.productItem.id;
  $scope.isAdded = false;

  $scope.isDisabled = !$scope.responseSuccess.find(item => item.id == $scope.id).count;

  $scope.checkUserCart = function(){
    return $rootScope.user.cart.find(item => item.id == $scope.id)
  }

  $scope.changeIsAdded = function(){
    if($scope.checkUserCart()){
      $scope.isAdded = true;
    }
  }

  $scope.redirectToCart = function($event){
    $event.stopPropagation();
    $location.path('/cart')
  }

  $scope.addToCart = function($event){
    $event.stopPropagation();
    if($routeParams.id){
      $rootScope.user.cart = [...$rootScope.user.cart, {...$scope.responseSuccess, addedToCart: 1}];
      $scope.isAdded = true;
      setLocalStorage('user', $rootScope.user)
      $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    } else{
      $rootScope.user.cart = [...$rootScope.user.cart, {...$scope.productItem, addedToCart: 1}];
      $scope.isAdded = true;
      setLocalStorage('user', $rootScope.user)
      $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    }
  }
  $scope.changeIsAdded()
}