import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('puzzles', function() {
    this.route('puzzle', {
      path: ':puzzle_id'
    });
  });
  this.route('entries');
  this.route('users', function() {
    this.route('user', {
      path: ':user_id'
    });
  });
});

export default Router;
