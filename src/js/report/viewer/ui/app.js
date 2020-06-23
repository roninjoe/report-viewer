var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  console.log("Entering app.config")
  $routeProvider
  .when("/", {
  templateUrl : "ui/report_list.html",
  controller : "reportListCtrl"
  })
  .when("/report/:name", {
    templateUrl : "ui/report.html"
    })
});  

// Declaring inline temporarily.  (separate file fails)
app.controller("reportListCtrl",
function($scope) {
    $scope.message = "message from reportListCtrl in app.js"
  }
);
