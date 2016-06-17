import Ember from 'ember';

export default Ember.Controller.extend({
  entries: [],
  actions: {
    getEntry(word){
      // debugger;
      // if we got here because we clicked the word from a definition string
      // collection, make sure we grab the word correctly to make api request
      this.store.queryRecord('entry', {filter: {word: word}}).then((entry) => {
        // Ember.Object.create(word: entry.get('word'), definition}
        let entries = this.get('entries')
        var definition = entry.get('definition')
        entry.set('definition', definition.split(" "))
        entries.pushObject(entry)
      })
    }
  }
});
