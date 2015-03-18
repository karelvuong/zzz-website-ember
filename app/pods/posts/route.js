import Ember from 'ember';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return {
      posts: this.store.find('post', { type: 1 }),
      answers: this.store.find('post', { type: 2 }),
      articles: this.store.find('post', { type: 3 })
    };
  }
});

export default PostsRoute;
