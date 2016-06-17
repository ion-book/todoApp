angular.module('starter.services', [])

.factory('TasksService', function() {
  var tasks = [];
  return {
    getAllTasks: function(){
      return tasks;
    },
    createTask: function( newTask ){
      tasks.push( newTask );
    },
    deleteTask: function(){
      //Implementar codigo
    },
    getGroupDate: function(){
      //Implementar codigo
    },
  }
})
