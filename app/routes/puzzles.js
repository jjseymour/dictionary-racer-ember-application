import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('puzzle');
  },
  actions: {
  clearPuzzle: function(puzzle) {
    let controller = this.controllerFor('puzzles.puzzle')
    controller.set('entries', [])
    controller.set('colors', [])
    controller.set('path', [])
    controller.set('count', 0)
    controller.set('showMyModal', false)
    controller.set('bestPathBeaten', false)
  }}
});
