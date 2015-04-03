import Ember from 'ember';
import resetScroll from '../../../mixins/reset-scroll.js';

export default Ember.Route.extend(resetScroll, {
  titleToken: 'Extensions'
});
