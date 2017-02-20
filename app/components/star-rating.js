import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['rating-panel'],
  rating: 0,
  maxRating: 5,

  stars: Ember.computed('rating', 'maxRating', function() {
    let fullStars = this.starRange(1, this.get('rating'), 'full');
    let emptyStars = this.starRange(this.get('rating') + 1, this.get('maxRating'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  starRange(start, end, type) {
    let starsData = [];
    for (let i = start; i <= end; i++) {
      starsData.push({ rating: i, full: type === 'full' });
    }
    return starsData;
  },

  actions: {
    setRating(newRating) {
      this.get('on-click')({
        item: this.get('item'),
        rating: newRating
      });
    }
  }
});
