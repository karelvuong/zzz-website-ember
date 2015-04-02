import Ember from 'ember';
import resetScroll from '../../mixins/reset-scroll.js';

export default Ember.Route.extend(resetScroll, {
  titleToken: 'Design Analysis: BlackBerry Flow',
  model: function() {
    return this.store.find('post', 4);
  }
});
