var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  console.log("Entering app.config")
  $routeProvider
  .when("/", {
  templateUrl : "ui/report_list.html",
  controller : "reportListCtrl"
  })
  .when("/report/:name", {
    templateUrl : "ui/report.html",
    controller : "reportCtrl"
    })
});  

// Declaring inline temporarily.  (separate file fails)
app.controller("reportListCtrl",
function($scope, $http) {
    $scope.message = "message from reportListCtrl in app.js";
    $http({
      method : "GET",
      url : "api"
    }).then(function mySuccess(response) {
      $scope.allReports = response.data;
    }, function myError(response) {
      $scope.message = response.statusText;
    })
  }
);