import Ember from 'ember';

var HomeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post', { type: 1 });
  }
});

export default HomeRoute;
