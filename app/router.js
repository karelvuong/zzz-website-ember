import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-home', { path: '/' });
  this.route('page-about', { path: '/about' });
  this.route('page-equipment', { path: '/equipment'});
  this.resource('page-posts', { path: '/posts' }, function() {
    this.route('post-design-maker', { path: 'design-analysis-zazzle-maker' });
  });
  this.resource('page-work', { path: '/work' });
  this.route('page-resume', { path: '/resume' });
  this.route('page-404', { path: '*path' });
  this.route('posts.post-website-redesign');
});

export default Router;
