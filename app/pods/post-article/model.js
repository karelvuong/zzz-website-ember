import Post from '../post/model.js';

var Answer = Post.extend({
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Cooler',
      organization: "CrackBerry",
      url: 'http://crackberry.com/cooler-blackberry-10',
      date: 'Dec 22, 2013',
      tags: []
    },
    {
      id: 2,
      title: 'Cella',
      organization: "CrackBerry",
      url: 'http://crackberry.com/cella-blackberry-10',
      date: 'Dec 6, 2013',
      tags: []
    },
    {
      id: 3,
      title: 'Winners Selected in Clinical Trial Visualization Redesign Challenge',
      organization: "Eli Lilly",
      url: 'http://portal.lillycoi.com/2013/11/14/winners-selected-in-clinical-trial-visualization-redesign-challenge/',
      date: 'Nov 11, 2013',
      tags: []
    }
  ]
});

export default Answer;
