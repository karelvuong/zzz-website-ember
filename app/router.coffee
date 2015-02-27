`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route 'page-home', { path: '/' }
  @route 'about'
  @route 'stuff-i-use'
  @route 'resume'
  @resource 'blog'
  @resource 'work'
  @route 'page-work', { path: '/work' }

`export default Router`
