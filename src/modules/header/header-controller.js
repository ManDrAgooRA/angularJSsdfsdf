import { HEADER_LINKS } from "../../constants";
import cart from '../../assets/img/cart.svg'
import favorite from '../../assets/img/heart-solid.svg'

export function headerCtrl($rootScope, $scope){
  $scope.LINKS = HEADER_LINKS;
  $scope.cart = cart;
  $scope.favorite = favorite;
  
  $scope.logout = function(){
    localStorage.clear();
    $rootScope.isLogin = false;
  }
}