import DS from 'ember-data';

App.Todo = DS.Model.extend({
  description: DS.attr('string'),
  createdAt: DS.attr('date', {defaultValue: new Date()}),
  isFinished: DS.attr('boolean', {defaultValue: false})
  finishedAt: DS.attr('date', {defaultValue: null}),
  creator: DS.belongsTo('user', {defaultValue: null}),
  todolist: DS.belongsTo('todolist')
});
