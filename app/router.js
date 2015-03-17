import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-home', { path: '/' });
  this.route('page-about', { path: '/about' });
  this.route('page-equipment', { path: '/equipment'});
  this.resource('posts', { path: '/posts' });
  this.route('post', { path: '/post' }, function() {
    this.route('website-redesign');
    this.route('design-analysis-zazzle-maker');
    this.route('design-analysis-blackberry-flow');
  });
  this.resource('page-work', { path: '/work' });
  this.route('page-resume', { path: '/resume' });
  this.route('page-404', { path: '*path' });
});

export default Router;
