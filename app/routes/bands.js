import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('band');
  },
  actions: {
    createBand() {
      let controller = this.get('controller');
      let band = this.store.createRecord('band', controller.getProperties('name')); //{ name: "Tool" }
      band.save().then(() => {
        controller.set('name', '');
        this.transitionTo('bands.band.songs', band);
      });
    },
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    }
  }
});
