import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Design Analysis: Zazzle.com Settings',
  model: function() {
    return this.store.find('post', 2);
  }
});
