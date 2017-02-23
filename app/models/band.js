import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr(), //can be omitted if it's a string
  songs: DS.hasMany('song')
});
