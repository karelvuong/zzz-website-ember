import Ember from 'ember';
import resetScroll from '../../../mixins/reset-scroll.js';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

export default Ember.Route.extend(RouteMetaMixin, resetScroll, {
  titleToken: 'Joining Vidyard',
  meta: function() {
    return {
      "name": {
        "twitter:card": "summary_large_image",
        "twitter:site": "@karelvuong",
        "twitter:creator": "@karelvuong",
        "twitter:title": "Joining Vidyard",
        "twitter:description": "This is a test description. It's very informative!",
        "twitter:image": "http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
      }
    };
  },
  model: function() {
    return this.store.find('post', 5);
  }
});
