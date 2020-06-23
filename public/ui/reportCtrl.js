
var app = angular.module('app',[]).controller('reportCtl',
function($scope) {
  console.log("Entering reportCtrl");
  $scope.message = "message from reportCtrl.js";
});