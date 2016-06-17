angular.module('starter.controllers', [])

.controller('TodayCtrl', function( $scope, $ionicModal, TasksService ){
  
  $scope.modal = null;
  $scope.is_new = true;
  $scope.task = {};
  $scope.tasks = TasksService.getAllTasks();
  
  $ionicModal.fromTemplateUrl('templates/task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
  .then(function( modal ){
    $scope.modal = modal;
  });
  
  $scope.openModal = function(){
    $scope.modal.show();
  }
  
  $scope.closeModal = function() {
    $scope.task = {};
    $scope.modal.hide();
  }
  
  $scope.newTask = function(){
    $scope.is_new = true;
    $scope.openModal();
  }
  
  $scope.editTask = function(task){
    $scope.is_new = false;
    $scope.task = task;
    $scope.openModal();
  }
  
  $scope.deleteTask = function(){
    TasksService.deleteTask( $scope.task );
    $scope.closeModal();
  }
  
  $scope.addTask = function(){
    TasksService.createTask( $scope.task );
    $scope.closeModal();
  }
  
  $scope.updateTask = function() {
    $scope.closeModal();
  }
  
  $scope.saveTask = function() {
    if($scope.is_new){
      $scope.addTask();
    }else{
      $scope.updateTask();
    }
  }
  
})
.controller('AllCtrl', function( $scope, $ionicModal, TasksService ){
  
  $scope.modal = null;
  $scope.is_new = true;
  $scope.task = {};
  $scope.dates = TasksService.getGroupDate();
  
  $ionicModal.fromTemplateUrl('templates/task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
  .then(function( modal ){
    $scope.modal = modal;
  });
  
  $scope.openModal = function(){
    $scope.modal.show();
  }
  
  $scope.closeModal = function() {
    $scope.task = {};
    $scope.modal.hide();
  }
  
  $scope.newTask = function(){
    $scope.is_new = true;
    $scope.openModal();
  }
  
  $scope.editTask = function(task){
    $scope.is_new = false;
    $scope.task = task;
    $scope.openModal();
  }
  
  $scope.deleteTask = function(){
    TasksService.deleteTask( $scope.task );
    $scope.closeModal();
  }
  
  $scope.addTask = function(){
    TasksService.createTask( $scope.task );
    $scope.dates = TasksService.getGroupDate();
    $scope.closeModal();
  }
  
  $scope.updateTask = function() {
    $scope.closeModal();
  }
  
  $scope.saveTask = function() {
    if($scope.is_new){
      $scope.addTask();
    }else{
      $scope.updateTask();
    }
  }
  
})
.controller('DoneCtrl', function( $scope, $ionicModal, TasksService ){
  
  $scope.modal = null;
  $scope.is_new = true;
  $scope.task = [];
  $scope.dates = TasksService.getGroupDate();
  
  $ionicModal.fromTemplateUrl('templates/task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
  .then(function( modal ){
    $scope.modal = modal;
  });
  
  $scope.openModal = function(){
    $scope.modal.show();
  }
  
  $scope.closeModal = function() {
    $scope.task = {};
    $scope.modal.hide();
  }
  
  $scope.newTask = function(){
    $scope.is_new = true;
    $scope.openModal();
  }
  
  $scope.editTask = function(task){
    $scope.is_new = false;
    $scope.task = task;
    $scope.openModal();
  }
  
  $scope.deleteTask = function(){
    TasksService.deleteTask( $scope.task );
    $scope.closeModal();
  }
  
  $scope.addTask = function(){
    TasksService.createTask( $scope.task );
    $scope.dates = TasksService.getGroupDate();
    $scope.closeModal();
  }
  
  $scope.updateTask = function() {
    $scope.closeModal();
  }
  
  $scope.saveTask = function() {
    if($scope.is_new){
      $scope.addTask();
    }else{
      $scope.updateTask();
    }
  }
  
})

