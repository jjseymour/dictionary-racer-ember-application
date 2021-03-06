import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
 sessionAccount: service('session-account'),
 randPuzzle: null,
 model(){
 },

 beforeModel() {
   return this._loadCurrentUser();
 },

 sessionAuthenticated() {
   this._loadCurrentUser().then(()=>{
     this.transitionTo('/puzzles');
   }).catch(() => this.get('session').invalidate());
 },

 _loadCurrentUser() {
   return this.get('sessionAccount').loadCurrentUser();
 },

 actions: {
   invalidateSession: function() {
       this.get('session').invalidate();
   },
   randomPuzzle: function(){
      this.transitionTo('puzzles.puzzle', (Math.floor(Math.random() * 5) + 1))
   }
 }
});
