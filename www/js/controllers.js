angular.module('starter.controllers', [])

.controller('TodayCtrl', function(){
  $scope.task =
  {
    id:1,
    title: 'Hacer las compras',
    description: 'Dulces, leche, chocolates y gomitas',
    date: new Date(),
    done: false
  }
})
.controller('AllCtrl', function(){
  console.log('AllCtrl');
})
.controller('DoneCtrl', function(){
  console.log('DoneCtrl');
})

