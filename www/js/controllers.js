angular.module('starter.controllers', [])

.controller('TodayCtrl', function( $scope, $ionicModal ){
  
  $scope.modal = null;
  $scope.is_new = true;
  $scope.task = {};
  $scope.tasks = [
    {
      id:1,
      title: 'Hacer las compras',
      description: 'Dulces, leche, chocolates y gomitas',
      date: new Date(),
      done: false
    },
    {
      id:2,
      title: 'Sacar la mascota',
      description: 'Dar un paseo en el parque más cercano',
      date: new Date(),
      done: true
    },
  ];
  
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
    var index = $scope.tasks.indexOf( $scope.task );
    if ( index > -1 ) $scope.tasks.splice( index, 1 );
    $scope.closeModal();
  }
  
})
.controller('AllCtrl', function( $scope ){
  
  $scope.dates = [
    {
      dateGroup: new Date(2015, 6, 5),
      tasks: [
        {
          id:1,
          title: 'Hacer las compras',
          description: 'Dulces, leche, chocolates y gomitas',
          date: new Date(),
          done: false
        },
        {
          id:2,
          title: 'Sacar la mascota',
          description: 'Dar un paseo en el parque más cercano',
          date: new Date(),
          done: true
        },
      ]
    },
    {
      dateGroup: new Date(2015, 6, 6),
      tasks: [
        {
          id:3,
          title: 'Pagar las facturas',
          description: 'Ir al banco y pagar todas las facturas',
          date: new Date(),
          done: false
        },
        {
          id:4,
          title: 'Ver una buena pelicula',
          description: 'Como el "El club de la pelea"',
          date: new Date(),
          done: true
        },
      ]
    },
  ];
  
})
.controller('DoneCtrl', function( $scope ){
  
  $scope.dates = [
    {
      dateGroup: new Date(2015, 6, 5),
      tasks: [
        {
          id:1,
          title: 'Hacer las compras',
          description: 'Dulces, leche, chocolates y gomitas',
          date: new Date(),
          done: false
        },
        {
          id:2,
          title: 'Sacar la mascota',
          description: 'Dar un paseo en el parque más cercano',
          date: new Date(),
          done: true
        },
      ]
    },
    {
      dateGroup: new Date(2015, 6, 6),
      tasks: [
        {
          id:3,
          title: 'Pagar las facturas',
          description: 'Ir al banco y pagar todas las facturas',
          date: new Date(),
          done: false
        },
        {
          id:4,
          title: 'Ver una buena pelicula',
          description: 'Como el "El club de la pelea"',
          date: new Date(),
          done: true
        },
      ]
    },
  ];
  
})

