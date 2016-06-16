import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findEntry(entry){
      debugger
      this.attrs.getEntries(entry)
    }
  }
});
