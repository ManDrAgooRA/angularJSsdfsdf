import { setLocalStorage } from "../../utils/setLocalStorage";

export function cartCtrl($rootScope, $scope, $controller){
  $controller('httpCtrl', {$scope: $scope})
  $scope.title = 'Cart';
  $scope.totalPrice = $rootScope.user.cart.reduce((prev, next) => {
    return prev + (next.addedToCart * next.price);
  }, 0);

  $scope.incrementCartItem = function(id){
    const changedCart = $rootScope.user.cart.map((item)=> {
      if(item.id === id && item.addedToCart+1 <= item.count){
       return {...item, addedToCart: item.addedToCart+1}
      } else{
        return item
      }
    })
    $rootScope.user.cart = changedCart;
    setLocalStorage('user', $rootScope.user);
    $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    $scope.countTotalPrice();
  }

  $scope.setCartItem = function(value, id){
    const changedCart = $rootScope.user.cart.map((item)=> {
      if(item.id === id && value <= item.count){
       return {...item, addedToCart: value}
      } else{
        return item
      }
    })
    $rootScope.user.cart = changedCart;
    setLocalStorage('user', $rootScope.user);
    $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    $scope.countTotalPrice();
  }

  $scope.decrementCartItem = function(id){
    const changedCart = $rootScope.user.cart.map((item)=> {
      if(item.id === id && item.addedToCart-1 >= 1){
        return {...item, addedToCart: item.addedToCart-1}
      } else{
        return item
      }
    })
    $rootScope.user.cart = changedCart;
    setLocalStorage('user', $rootScope.user);
    $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    $scope.countTotalPrice();
  }

  $scope.deleteFromCart = function(id){
    $rootScope.user.cart = $rootScope.user.cart.filter(item => item.id !== id);
    setLocalStorage('user', $rootScope.user);
    $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    $scope.countTotalPrice();
  }

  $scope.countTotalPrice = function(){
    $scope.totalPrice = $rootScope.user.cart.reduce((prev, next) => {
      return prev + (next.addedToCart * next.price);
    }, 0)
  }

  $scope.buy = function(){
    console.log('you buy smt')
  }
}