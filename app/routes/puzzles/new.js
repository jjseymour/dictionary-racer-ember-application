import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('puzzle')
  },
  actions: {
    save(puzzle){
      puzzle.save().then((response)=>{
        this.transitionTo('puzzles.puzzle', response.get('id'))
      }
    )}
  }
});
