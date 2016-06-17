angular.module('starter.services', [])

.factory('TasksService', function() {
  var tasks = [];
  return {
    getAllTasks: function(){
      return tasks;
    },
    createTask: function(){
      //Implementar codigo
    },
    deleteTask: function(){
      //Implementar codigo
    },
    getGroupDate: function(){
      //Implementar codigo
    },
  }
})
