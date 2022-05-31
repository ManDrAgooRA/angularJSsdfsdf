export function productListTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    controller: 'productListCtrl',
    template: require('./productList.html').default
  }
}