`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @resource 'home', { path: '/' }
  @resource 'resume'
  @route 'stuff-i-use'
  @route 'posts'
  @route 'work'
  @route 'about'

`export default Router`
