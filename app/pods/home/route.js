import Ember from 'ember';

var HomeRoute = Ember.Route.extend({
  model: function() {
    return this.store.all('post');
  }
});

export default HomeRoute;
