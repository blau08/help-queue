import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
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
