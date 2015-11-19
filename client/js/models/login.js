/**
 * Created by alex on 13.10.2015.
 */

//var Backbone = require('backbone');

export default class Login extends Backbone.Model {
    urlRoot = './js/data/load.json'
    defaults = {
        email: '',
        password: '',
        passwordConfirm: '',
        memory: true
    }
    validation = {
        email: {
            required: true,
            pattern: 'email',
        },
        password: {
            required: true,
            minLength: 4,
        },
        passwordConfirm: {
            required: true,
            minLength: 4,
            equalTo: 'password'
        }
    }
    constructor(props){
        super(props);
    }
    initialize (attr, options) {
        this.on('error', this.onError, this);
    }
    load () {
        return this.fetch();
    }
    onError(model, xhr){
        this.validationError = this.validationError || {};
        this.validationError.xhr = xhr;
        this.trigger('validated', false, this, this.validationError);
    }
}
