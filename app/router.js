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
    this.route('post-website-redesign', { path: 'website-redesign' });
    this.route('post-design-analysis-zazzle-maker', { path: 'design-analysis-zazzle-maker' });
    this.route('post-design-analysis-blackberry-flow', { path: 'design-analysis-blackberry-flow' });
  });
  this.resource('page-work', { path: '/work' });
  this.route('page-resume', { path: '/resume' });
  this.route('page-404', { path: '*path' });
});

export default Router;
