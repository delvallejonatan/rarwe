import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

export default Ember.Route.extend({
  model() {
    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    let daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });

    let ledZeppelin = Band.create({
      name: 'Led Zeppelin',
      songs: [blackDog]
    });

    let pearlJam = Band.create({
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter]
    });

    let fooFighters = Band.create({
      name: 'Foo Fighters',
      songs: [pretender]
    });

    return [ledZeppelin, pearlJam, fooFighters];
  },
  actions: {
    createBand() {
      let name = this.get('controller').get('name');
      let band = Band.create({ name: name });
      this.modelFor('bands').pushObject(band);
      this.get('controller').set('name', '');
      this.transitionTo('bands.band.songs', band);
    }
  }
});
