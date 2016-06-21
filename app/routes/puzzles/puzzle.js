import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var puzzle = this.store.peekRecord('puzzle', params.puzzle_id);
    return puzzle;
  }
});