import Ember from 'ember';

export default Ember.Component.extend({
  showTicketForm: false,

  actions: {
    addTicket() {
      this.toggleProperty('showTicketForm');
    },
    submit() {
      var params = {
        student: this.get('name'),
        description: this.get('description'),
        openTime: Date.now(),
        closeTime: false
      };
      debugger;
      this.toggleProperty('showTicketForm');
      this.sendAction('addTicket', params);
    }
  }
});
