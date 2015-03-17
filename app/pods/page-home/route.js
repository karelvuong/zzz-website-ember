import Ember from 'ember';

var HomeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

export default HomeRoute;
