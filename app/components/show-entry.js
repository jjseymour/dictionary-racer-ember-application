import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    findEntry(entry){
      this.attrs.getEntries(entry)
    }
  }
});
