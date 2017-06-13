import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    submitForm(){
      var name = this.get('name');
      var phone = this.get('phone');
      var email = this.get('email');
      var form = {
        name: name,
        phone: phone,
        email: email
      }

      var formJson = JSON.stringify(form)

      return this.get('ajax').post('http://localhost:3000', {
        data: formJson
      });

    }
  }
});
