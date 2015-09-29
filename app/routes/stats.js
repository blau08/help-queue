import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tickets: this.store.findAll('ticket'),

      closed: this.store.find('ticket').then(function(closed) {
        return closed.filterBy('closed', true);
      })
    });
  },
});
