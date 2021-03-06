import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('date', {defaultValue: new Date()}),
  creator: DS.belongsTo('user', {defaultValue: null}),
  todos: DS.hasMany('todo')
});
