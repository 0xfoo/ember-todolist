import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  registerdAt: DS.attr('date', {defaultValue: new Date()}),
  todos: DS.hasMany('todo'),
  todolists: DS.hasMany('todolists')
});
