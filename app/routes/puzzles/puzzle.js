import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var puzzle = this.store.peekRecord('puzzle', params.puzzle_id);
    return puzzle;
  },
  // bacon: ["something"],
  // actions: {
  //   getEntry(word){
  //     this.toggleProperty('cheese')
  //     self = this
  //     // this.currentModel.get('start_word')
  //     this.store.queryRecord('entry', {filter: {word: word}}).then((entry) => {
  //
  //       self.renderTemplate('entries.userattempt', {outlet: "entries", model: entry})
  //       // this.bacon.push(entry)
  //     });
  //   },
  //   sendEntry(){
  //     debugger
  //   }
  // }
});
