import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  start_word: attr(),
  end_word: attr(),
  difficulty: attr(),
  best_path: attr(),
  users: hasMany('user', {async: true}),
  entries: hasMany('entry', {async: true}),
  isEasy: Ember.computed.equal('difficulty', 'easy'),
  isMedium: Ember.computed.equal('difficulty', 'medium'),
  isHard: Ember.computed.equal('difficulty', 'hard')
});
