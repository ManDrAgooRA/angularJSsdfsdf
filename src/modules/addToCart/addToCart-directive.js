export function addToCartTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    controller: 'addToCartCtrl',
    template: require('../addToCart/addToCart.html').default
  }
}