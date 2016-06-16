import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getEntries(entry) {
      debugger
      entry.send('sendEntry')
    }
  }
});
