import Ember from 'ember';
import resetScroll from '../../mixins/reset-scroll.js';

var PostsRoute = Ember.Route.extend(resetScroll, {
  titleToken: 'Posts',
  model: function() {
    return {
      posts: this.store.all('post'),
      answers: this.store.all('post-answer'),
      articles: this.store.all('post-article')
    };
  }
});

export default PostsRoute;
