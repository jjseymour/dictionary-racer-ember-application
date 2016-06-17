import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   doSave(d, meta) {
     d.resolve();
   },
   doAfterClose() {
     this.sendAction('goHome')
   },
   doClose(d) {
     d.resolve();
   }
 }
});
