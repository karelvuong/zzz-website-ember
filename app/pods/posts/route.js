import Ember from 'ember';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return {
      posts: this.store.find('post'),
      answers: this.store.find('post-answer'),
      articles: this.store.find('post-article')
    };
  }
});

export default PostsRoute;
