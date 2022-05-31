export function spinnerTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    template: require('./spinner.html').default
  }
}