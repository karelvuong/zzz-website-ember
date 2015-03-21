import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      posts: this.store.find('post'),
      answers: this.store.find('post-answer'),
      articles: this.store.find('post-article')
    };
  }/*,
  actions: {
   goToAnchor: function(route, anchor) {
      var $elem, $scrollTo;
      this.transitionTo(route).then(function() {
        Em.run.schedule('afterRender', function(){
          $elem = $('#' + anchor);
          $('html,body').animate({
              scrollTop: $elem.offset().top - 15
          }, 200);
        });
      });
    }
   }*/
});
