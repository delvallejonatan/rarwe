import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('bands.band');
  },
  setupController(controller, model) {
    if (!Ember.isEmpty(model.description)) {
      controller.set('label', 'Edit');
    } else {
      controller.set('label', 'Add');
    }
    controller.set('model', model);
  },
  actions: {
    willTransition(transition) {
      let controller = this.get('controller'), leave;
      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sureyou want to leave?");
        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    },
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} details - Rock & Roll`;
    },
    save() {
      let controller = this.get('controller');
      let band = controller.get('model');
      return band.save();
    }
  }
});
