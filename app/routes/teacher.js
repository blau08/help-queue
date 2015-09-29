import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('ticket').then(function(open) {
      return open.filterBy('closeTime', false);
    })
  },
  actions: {
    closeTicket(ticket, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          ticket.set(key, params[key]);
        }
      });
      ticket.save();
      this.transitionTo('teacher');
    }
  }
});
