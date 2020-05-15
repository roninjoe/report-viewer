var app = angular.module('app', ['ngRoute']);
// angular.module('app',[]).controller('HelloWorldCtrl',

app.controller("reportListCtrl",
function($scope) {
    $scope.message = "This is the reportListCtrl message"
  }
)
