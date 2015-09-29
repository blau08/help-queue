import Ember from 'ember';

export function timePassed(params/*, hash*/) {
  var timeOpen = params[0];
  return moment(timeOpen).fromNow();
}

export default Ember.Helper.helper(timePassed);
