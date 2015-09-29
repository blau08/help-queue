import Ember from 'ember';

export default Ember.Component.extend({
  // App = Ember.Application.create({})
  //
  // Ember.TextSupport.reopen({
  //     attributeBindings: ['required']
  // });

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
      this.toggleProperty('showTicketForm');
      this.sendAction('addTicket', params);
    }
  }
});
