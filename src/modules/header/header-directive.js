
export function headerTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    controller: 'headerCtrl',
    template: require('./header.html').default
  }
}