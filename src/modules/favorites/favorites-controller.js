import { isArray } from "angular";
import { setLocalStorage } from "../../utils";

export function favoritesCtrl($rootScope, $scope, $controller, $routeParams ){
  $controller('httpCtrl', {$scope: $scope})
  $scope.id = $routeParams.id ? +$routeParams.id : +$scope.productItem.id;

  $scope.isFavorite = false;

  $scope.chekFavorites = function(){
    return $rootScope.user.favorites.find(elem => elem.id == $scope.id);
  }

  $scope.changeFavoriteStatus = function(){
    if($scope.chekFavorites()){
      $scope.isFavorite = true;
    }
  }

  $scope.addToFavorite = function($event){
    $event.stopPropagation()
    if($scope.isFavorite){
      $rootScope.user.favorites = $rootScope.user.favorites.filter(elem => elem.id !== +$scope.id);
      $scope.isFavorite = false;
      setLocalStorage('user', $rootScope.user)
      $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
    } else{
      if(Array.isArray($scope.responseSuccess)){
        $rootScope.user.favorites = [...$rootScope.user.favorites, $scope.responseSuccess.find(item => item.id == $scope.id)];
      } else{
        $rootScope.user.favorites = [...$rootScope.user.favorites, $scope.responseSuccess]
      }
      $scope.httpMetodPatch(`http://localhost:3004/users/${$rootScope.user.id}`, $rootScope.user);
      $scope.isFavorite = true;
      setLocalStorage('user', $rootScope.user)
    }
  }
  $scope.changeFavoriteStatus()

}