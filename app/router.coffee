`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route 'page-home', { path: '/' }
  @route 'about'
  @route 'stuff-i-use'
  @resource 'page-blog', { path: '/blog' }
  @resource 'page-work', { path: '/work' }
  @route 'page-resume', { path: '/resume' }

`export default Router`
