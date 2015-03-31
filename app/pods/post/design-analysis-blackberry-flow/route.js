import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Design Analysis: BlackBerry Flow',
  model: function() {
    return this.store.find('post', 4);
  }
});
