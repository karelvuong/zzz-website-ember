import Ember from 'ember';
import resetScroll from '../../mixins/reset-scroll.js';

var HomeRoute = Ember.Route.extend(resetScroll, {
  model: function() {
    return this.store.all('post');
  }
});

export default HomeRoute;
