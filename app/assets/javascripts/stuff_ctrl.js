(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){

    $scope.message = "Hello";
   
    $scope.tasks = ["Walk the dog","Walk the car","Walk the house"];

    $scope.addTask = function(task){
      $scope.tasks.push(task);

      $scope.newTask = "";
    };

    // $scope.deleteTask = function(task){
    //   $scope.tasks.hide
    // };
    window.scope = $scope
  });

}());