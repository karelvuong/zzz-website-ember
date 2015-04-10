import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('about');
  this.route('equipment');
  this.resource('posts');
  this.route('post', { path: '/post' }, function() {
    this.route('website-redesign');
    this.route('design-analysis-zazzle-maker');
    this.route('design-analysis-blackberry-flow');
    this.route('design-analysis-zazzle-settings');
  });
  this.resource('portfolio', function() {
    this.route('websites');
    this.route('themes');
    this.route('extensions');
  });
  this.route('resume');
  this.route('error', { path: '*path' });
});

export default Router;
