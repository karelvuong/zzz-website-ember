import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Design Analysis: Zazzle Maker Dashboard',
  model: function() {
    return this.store.find('post', 3);
  }
});
