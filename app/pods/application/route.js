import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    var separator = tokens.length > 0 ? ' | ' : '';
    return 'Karel Vuong' + separator + tokens.join(' - ');
  },
  model: function() {
    return {
      posts: this.store.find('post'),
      answers: this.store.find('post-answer'),
      articles: this.store.find('post-article')
    };
  }
});
