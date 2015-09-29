import Ember from 'ember';

export default Ember.Component.extend({
  showTicket: false,
  actions: {
    viewTicket() {
      this.toggleProperty('showTicket');
    },
    closeTicket(ticket) {
      var params = {
        closeTime: Date.now()
      }
      this.sendAction('closeTicket', ticket, params)
    }
  }
});
