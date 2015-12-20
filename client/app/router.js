import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('memory', { path: '/memory' });
  this.route('memories', { path: '/memories' });
  this.route('reminders', { path: '/reminders' });
  this.route('settings', { path: '/settings' });
  this.route('tags', { path: '/tags' });
  this.route('types', { path: '/types' });
  this.route('users', { path: '/users' });
});

export default Router;
