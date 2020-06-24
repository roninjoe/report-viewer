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
    console.log("Entering reportListCtrl");
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

app.controller('reportCtrl',
function($scope, $route, $routeParams) {
  console.log("Entering reportCtrl");
  console.log( 'name is ' + $routeParams.name);
  $scope.message = "message from reportCtrl.js";
});