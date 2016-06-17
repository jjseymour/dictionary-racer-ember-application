import Ember from 'ember';

export default Ember.Controller.extend({
  entries: [],
  showMyModal: false,
  actions: {
    getEntry(word){
      if (word === this.get('model').get('end_word')){
        this.send('declareWin')
      }
      else {
      this.store.queryRecord('entry', {filter: {word: word}}).then((entry) => {
        let entries = this.get('entries')
        var definition = entry.get('definition')
        entry.set('definition', definition.split(" "))
        entries.pushObject(entry)
      })}
    },
    declareWin(){
      this.toggleProperty('showMyModal')
    }
  }
});
