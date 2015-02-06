`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route 'home', { path: '/' }
  @route 'about'
  @route 'stuff-i-use'
  @route 'resume'
  @resource 'posts'
  @resource 'work'

`export default Router`
