import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
 session: service('session'),
 store: service(),

 loadCurrentUser() {
   return new RSVP.Promise((resolve, reject) => {
     const token = this.get('session.data.authenticated.token');
     self = this
     if (!Ember.isEmpty(token)) {
       debugger
       return self.get('store').findRecord('user', 'current-user').then((user) => {
        debugger
         self.set('account', user);
         resolve();
       }, reject);
     } else {
        debugger
       resolve();
     }
   });
 }
});