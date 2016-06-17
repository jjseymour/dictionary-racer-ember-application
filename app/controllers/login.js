import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
   authenticate: function(credentials) {
     var authenticator = 'authenticator:jwt';
     debugger
     this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
      debugger
      console.log("Somethin' bad happened round these parts")
       // this.set('errorMessage', reason.responseJSON.errors || reason);
     });
   }
  }
});
