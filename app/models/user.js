import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr(),
  email: attr(),
  password_digest: attr(),
  avatar: attr(),
  puzzles: hasMany('puzzle')
});
