import Ember from 'ember';
import resetScroll from '../../../mixins/reset-scroll.js';

export default Ember.Route.extend(resetScroll, {
  titleToken: 'Design Analysis: Zazzle.com Settings',
  model: function() {
    return this.store.find('post', 2);
  }
});
