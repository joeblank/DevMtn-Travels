angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams) {


var book = mainSrv.travelInfo;
var id = parseInt($stateParams.id);
for (var i = 0; i < book.length; i++) {
  if (id === book[i].id) {
    $scope.travelData = book[i];
}
}
})
