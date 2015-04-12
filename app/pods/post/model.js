import DS from 'ember-data';

var Post = DS.Model.extend({
  title:          DS.attr('string'),
  organization:   DS.attr('string'),
  url:            DS.attr('string'),
  date:           DS.attr('date'),
  tags:           DS.attr('array')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Website Redesign',
      url: 'post.website-redesign',
      date: 'Mar 17, 2015',
      tags: []
    },
    {
      id: 2,
      title: 'Zazzle.com Settings',
      url: 'post.design-analysis-zazzle-settings',
      date: 'Mar 20, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 3,
      title: 'Zazzle Maker Dashboard',
      url: 'post.design-analysis-zazzle-maker',
      date: 'Mar 02, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 4,
      title: 'BlackBerry Flow',
      url: 'post.design-analysis-blackberry-flow',
      date: 'Jan 05, 2015',
      tags: [
        "Design Analysis"
      ]
    },
    {
      id: 5,
      title: 'Joining Vidyard',
      url: 'post.announcement-joining-vidyard',
      date: 'Apr 25, 2015',
      tags: [
        "Announcement"
      ]
    },
    {
      id: 6,
      title: 'Joining Zazzle',
      url: 'post.announcement-joining-zazzle',
      date: 'Jan 01, 2015',
      tags: [
        "Announcement"
      ]
    }
  ]
});

export default Post;
