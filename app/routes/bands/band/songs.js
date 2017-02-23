import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('bands.band');
  },
  resetController(controller) {
    controller.set('songCreationStarted', false);
  },
  actions: {
    createSong() {
      let controller = this.get('controller');
      let band = this.modelFor('bands.band');
      let song = this.store.createRecord('song', {
        title: controller.get('title'),
        band
      });
      song.save().then(() => {
        controller.set('title', '');
      });
    },
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  }
});
