import Ember from 'ember';

var PostsRoute = Ember.Route.extend({
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
