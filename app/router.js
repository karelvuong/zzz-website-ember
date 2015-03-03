import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-home', { path: '/' });
  this.route('page-about', { path: '/about' });
  this.route('page-equipment', { path: '/equipment'});
  this.resource('page-blog', { path: '/blog' });
  this.resource('page-work', { path: '/work' });
  this.route('page-resume', { path: '/resume' });
});

export default Router;
