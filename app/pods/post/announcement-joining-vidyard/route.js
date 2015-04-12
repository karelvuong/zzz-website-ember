import Ember from 'ember';
import resetScroll from '../../../mixins/reset-scroll.js';

export default Ember.Route.extend(resetScroll, {
  titleToken: 'Joining Vidyard',
  model: function() {
    return this.store.find('post', 5);
  }
});
