angular.module('starter.controllers', [])

.controller('TodayCtrl', function( $scope ){
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
  ]
})
.controller('AllCtrl', function(){
  var obj =
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
  }
})
.controller('DoneCtrl', function(){
  console.log('DoneCtrl');
})

