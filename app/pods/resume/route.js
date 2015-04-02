import Ember from 'ember';
import resetScroll from '../../mixins/reset-scroll.js';

var ResumeRoute = Ember.Route.extend(resetScroll, {
  titleToken: 'Resume'
});

export default ResumeRoute;
