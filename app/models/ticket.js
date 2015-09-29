import DS from 'ember-data';

export default DS.Model.extend({
  student: DS.attr(),
  description: DS.attr(),
  openTime: DS.attr(),
  closeTime: DS.attr(),
  closed: DS.attr()
});
