import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      posts: this.store.find('post'),
      answers: this.store.find('post-answer'),
      articles: this.store.find('post-article')
    };
  }
});
