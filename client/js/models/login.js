/**
 * Created by alex on 13.10.2015.
 */

//var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    urlRoot: './js/data/load.json',
    defaults: {
        email: '',
        password: ''
    },
    validation: {
        email: {
            required: true,
            pattern: 'email',
        },
        password: {
            required: true,
            minLength : 4,
        }
    },
    initialize: function (attr, options) {

    },
    load: function () {
        return this.fetch();
    }
});
