import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('puzzles', function() {
    this.route('puzzle', {
      path: '/:puzzle_id'
    });
    this.route('winner');
    this.route('new');
  });
  this.route('entries', function() {
    this.route('entry', {
      path: '/:entry_id'
    });
  });
  this.route('users', function() {
    this.route('user', {
      path: '/:user_id'
    });
  });
});

export default Router;
