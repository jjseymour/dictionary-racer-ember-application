import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('puzzle', params.puzzle_id);
  },
  actions: {
    getEntries(){
    return this.store.findAll('entry')
    },
    sendEntry(){
      debugger
    }
  }
});
