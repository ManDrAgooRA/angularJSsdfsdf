export function favoritesTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    controller: 'favoritesCtrl',
    template: require('../favorites/favorites.html').default
  }
}