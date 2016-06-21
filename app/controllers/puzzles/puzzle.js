import Ember from 'ember';

export default Ember.Controller.extend({
  entries: [],
  colors: [],
  path: [],
  count: 0,
  showMyModal: false,
  actions: {
    getEntry(word){
      if (word === this.get('model').get('end_word')){
        if (this.get('entries').length < this.get('model').get('best_path').length){
          this.send('updateBestPath')
        }
        else {
        this.incrementProperty('count')
        this.toggleProperty('showMyModal')
        }
      }
      else {
      let path = this.get('path')
      let colors = this.get('colors')
      this.store.queryRecord('entry', {filter: {word: word}}).then((entry) => {
        this.incrementProperty('count')
        let entries = this.get('entries')
        var definition = entry.get('definition')
        entry.set('definition', definition.split(" "))
        entries.pushObject(entry)
        self = this
        this.get('path').forEach(function(puzzleWord){

          var definition = self.entries[self.entries.length-1].get('definition')
          var defLength = definition.length
          var counter = 0
            definition.forEach(function(defWord){
              counter ++
              if (self.count + 1 != self.colors.length) {
                if (puzzleWord == self.entries[self.entries.length-1].get('word')) {
                  colors.pushObject("green")
                  self.entries[self.entries.length-1].set('green', true)
                }
                else if (puzzleWord == defWord) {
                  colors.pushObject("yellow")
                  self.entries[self.entries.length-1].set('yellow', true)
                }
                else if (defLength == counter && puzzleWord == self.path[self.path.length-1]) {
                  colors.pushObject("red")
                  self.entries[self.entries.length-1].set('red', true)
                }
            }
          })
        })
      })}
    },
    setEntry(puzzle){
      let path = this.get('path')
      let colors = this.get('colors')
      this.store.queryRecord('entry', {filter: {word: puzzle.get('start_word')}}).then((entry) => {
        let entries = this.get('entries')
        var definition = entry.get('definition')
        entry.set('definition', definition.split(" "))

        colors.pushObject("green")

        entries.pushObject(entry)
        entries[this.entries.length-1].set('green', true)
        if (puzzle.get('best_path').length === 0){
          path.pushObject(puzzle.get('end_word'))
        }
        puzzle.get('best_path').forEach(function(puzzleWord){
          path.pushObject(puzzleWord)

        })
      })
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
      bestPath.push(this.get('model').get('end_word'))
      this.get('model').set('best_path', bestPath)
      this.get('model').save().then((puzzle)=>{
        this.incrementProperty('count')
        this.toggleProperty('bestPathBeaten')
        this.toggleProperty('showMyModal')
      })
    }
  }
});
