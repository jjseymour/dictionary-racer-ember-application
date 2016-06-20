import Ember from 'ember';

export default Ember.Controller.extend({
  entries: [],
  count: 0,
  showMyModal: false,
  actions: {
    getEntry(word){
      if (word === this.get('model').get('end_word')){
        if (this.get('entries').length < this.get('model').get('best_path').length){
          this.send('updateBestPath')
        }
        this.incrementProperty('count')
        this.toggleProperty('showMyModal')
      }
      else {
      this.store.queryRecord('entry', {filter: {word: word}}).then((entry) => {
        this.incrementProperty('count')
        let entries = this.get('entries')
        var definition = entry.get('definition')
        entry.set('definition', definition.split(" "))
        entries.pushObject(entry)
      })}
    },
    goHome(){
      this.transitionToRoute('puzzles')
    },
    updateBestPath(){
      let bestPath = []
      let entries = this.get('entries')
      entries.forEach(function(entry){
        bestPath.push(entry.get('word'))
      })
      this.get('model').set('best_path', bestPath)
      this.get('model').save().then(()=>{
        debugger
      })
    }
  }
});
