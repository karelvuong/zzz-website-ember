import Ember from 'ember';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return {
      posts: this.store.find('post', { type: 1 }),
      articles: this.store.find('post', { type: 2 })
    };
  }
});

export default PostsRoute;
