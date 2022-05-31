export function footerTemplate(){
  return{
    restrict: 'EA',
    replace: true,
    scope: true,
    template: require('../views/footer.html').default
  }
}