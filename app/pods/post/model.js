import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  date: DS.attr('date'),
  tags: DS.attr('array'),
  type: DS.attr('number')   // 1 = personal, 2 = other
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Website Redesign',
      url: 'post.website-redesign',
      type: 1,
      // date: 1425283200000
      date: 'Mar 17, 2015',
      tags: []
    },
    {
      id: 2,
      title: 'Zazzle Maker Dashboard',
      url: 'post.design-analysis-zazzle-maker',
      type: 1,
      // date: 1424937600000
      date: 'Mar 02, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 3,
      title: 'BlackBerry Flow',
      url: 'post.design-analysis-blackberry-flow',
      type: 1,
      // date: 1420358400000
      date: 'Jan 05, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 4,
      title: 'Winners Selected in Clinical Trial Visualization Redesign Challenge',
      url: 'http://portal.lillycoi.com/2013/11/14/winners-selected-in-clinical-trial-visualization-redesign-challenge/',
      type: 2,
      // date: 1420358400000
      date: 'Nov 11, 2013',
      tags: []
    }
  ]
});

export default Post;
