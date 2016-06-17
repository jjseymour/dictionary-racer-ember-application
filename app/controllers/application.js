import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
   invalidateSession() {
     debugger
     this.get('session').invalidate();
   }
}});
