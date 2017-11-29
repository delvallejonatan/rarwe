import DS from 'ember-data'
import config from 'rarwe/config/environment'

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
})

// API lived at http://rock-and-roll-with-emberjs-api.herokuapp.com
