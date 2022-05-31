export function asideTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope : true,
    controller: 'asideCtrl',
    template: require('./aside.html').default
  }
}