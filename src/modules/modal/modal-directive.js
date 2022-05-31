export function modalTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    controller: 'mainCtrl',
    template: require('./modal.html').default
  }
}