import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug);
  },
  afterModel(band) {
    let description = band.get('description');
    if (Ember.isEmpty(description)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details');
    }
  }
});
