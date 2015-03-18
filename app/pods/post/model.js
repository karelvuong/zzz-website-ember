import DS from 'ember-data';

var Post = DS.Model.extend({
  title:          DS.attr('string'),
  organization:   DS.attr('string'),
  url:            DS.attr('string'),
  date:           DS.attr('date'),
  tags:           DS.attr('array'),
  type:           DS.attr('number')   // 1 = personal, 2 = other
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Website Redesign',
      url: 'post.website-redesign',
      type: 1,
      date: 'Mar 17, 2015',
      tags: []
    },
    {
      id: 2,
      title: 'Zazzle Maker Dashboard',
      url: 'post.design-analysis-zazzle-maker',
      type: 1,
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
      date: 'Jan 05, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 4,
      title: 'Should I go to University of Waterloo for CS (non coop) or University of Toronto CS (with optional PEY) for a career in the silicon valley?',
      url: 'https://www.quora.com/Should-I-go-to-University-of-Waterloo-for-CS-non-coop-or-University-of-Toronto-CS-with-optional-PEY-for-a-career-in-the-silicon-valley/answer/Karel-Vuong',
      type: 2,
      date: 'Mar 17, 2015',
      tags: []
    },
    {
      id: 5,
      title: 'How can I make the most of my computer science program at U of T?',
      url: 'https://www.quora.com/How-can-I-make-the-most-of-my-computer-science-program-at-U-of-T/answer/Karel-Vuong',
      type: 2,
      date: 'Jan 27, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 6,
      title: 'I study CS bachelor\'s at U of T, and I am close to graduating with a low GPA, and I don\'t have much of a professional competency. Can I find a job, and how much could I be earning straight out of university?',
      url: 'https://www.quora.com/I-study-CS-bachelors-at-U-of-T-and-I-am-close-to-graduating-with-a-low-GPA-and-I-don-not-have-much-of-a-professional-competency-Can-I-find-a-job-and-how-much-could-I-be-earning-straight-out-of-university/answer/Karel-Vuong',
      type: 2,
      date: 'Nov 03, 2014',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 7,
      title: 'Cooler',
      organization: "CrackBerry",
      url: 'http://crackberry.com/cooler-blackberry-10',
      type: 3,
      date: 'Dec 22, 2013',
      tags: []
    },
    {
      id: 8,
      title: 'Cella',
      organization: "CrackBerry",
      url: 'http://crackberry.com/cella-blackberry-10',
      type: 3,
      date: 'Dec 6, 2013',
      tags: []
    },
    {
      id: 9,
      title: 'Winners Selected in Clinical Trial Visualization Redesign Challenge',
      organization: "Eli Lilly",
      url: 'http://portal.lillycoi.com/2013/11/14/winners-selected-in-clinical-trial-visualization-redesign-challenge/',
      type: 3,
      date: 'Nov 11, 2013',
      tags: []
    }
  ]
});

export default Post;
