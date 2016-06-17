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
      var allTasks = tasks.map(function(item){
        var date = new Date( item.date );
        item.dateGroup = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return item;
      });
      return _.map(_.groupBy( allTasks, 'dateGroup', function(tasks, i){
        return {
          dateGroup: new Date(i),
          tasks: tasks
        }
      }));
    },
  }
})
