import Ember from 'ember';

export default Ember.Component.extend({
  showTicket: false,
  actions: {
    viewTicket() {
      this.toggleProperty('showTicket');
    },
    closeTicket(ticket) {
      var params = {
        closeTime: Date.now(),
        closed: true
      }
      this.sendAction('closeTicket', ticket, params)
    }
  }
});
