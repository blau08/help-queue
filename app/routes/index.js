import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    addTicket(params) {
      var ticket = this.store.createRecord('ticket', params);
      ticket.save();
      debugger;
      this.transitionTo('index');
    }
  }
});
