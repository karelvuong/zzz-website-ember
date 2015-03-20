import Post from '../post/model.js';

var Answer = Post.extend({
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Should I study CS at University of Waterloo or the University of Toronto to get a career in Silicon Valley?',
      url: 'https://www.quora.com/Should-I-go-to-University-of-Waterloo-for-CS-non-coop-or-University-of-Toronto-CS-with-optional-PEY-for-a-career-in-the-silicon-valley/answer/Karel-Vuong',
      date: 'Mar 17, 2015',
      tags: []
    },
    {
      id: 2,
      title: 'How can I make the most of my CS program at the University of Toronto?',
      url: 'https://www.quora.com/How-can-I-make-the-most-of-my-computer-science-program-at-U-of-T/answer/Karel-Vuong',
      date: 'Jan 27, 2015',
      tags: []
    },
    {
      id: 3,
      title: 'I study CS at the University of Toronto and am close to graduating with a low GPA and little work experience. Will I be able to find a job?',
      url: 'https://www.quora.com/I-study-CS-bachelors-at-U-of-T-and-I-am-close-to-graduating-with-a-low-GPA-and-I-don-not-have-much-of-a-professional-competency-Can-I-find-a-job-and-how-much-could-I-be-earning-straight-out-of-university/answer/Karel-Vuong',
      date: 'Nov 03, 2014',
      tags: []
    }
  ]
});

export default Answer;
