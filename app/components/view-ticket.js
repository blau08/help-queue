import Ember from 'ember';

export default Ember.Component.extend({
  showTicket: false,
  actions: {
    viewTicket() {
      this.toggleProperty('showTicket');
    }
  }
});
