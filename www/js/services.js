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
    deleteTask: function( task ){
      var index = tasks.indexOf( task );
      if (index > -1) tasks.splice( index, 1 );
      return tasks;
    },
    getGroupDate: function(){
      //Implementar codigo
    },
  }
})
