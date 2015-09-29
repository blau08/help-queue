import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      var params = {
        student: this.get('name'),
        description: this.get('description'),
        openTime: Date.now(),
        closeTime: false,
        closed: false
      };
      this.sendAction('addTicket', params);
    }
  }
});
