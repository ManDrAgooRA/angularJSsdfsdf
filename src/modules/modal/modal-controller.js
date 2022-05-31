export function modalCtrl($scope){
  $scope.modalMessage = 'message'
  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
  $scope.openModal = function(){
    myModal.show()
  }
}