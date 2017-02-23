import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,
  title: '',
  isAddButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),
  canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
  actions: {
    updateRating(params) {
      let song = params.item,
        rating = params.rating;
      song.set('rating', rating);

      return song.save();
    },
    enableSongCreation() {
      this.set('songCreationStarted', true);
    }
  }
});
