import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Website Redesign',
  model: function() {
    return this.store.find('post', 1);
  }
});
