/**
 * Created by alex on 12.10.2015.
 */

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

var React = require('react');
var ReactDOM = require('react-dom');

var Find = require('./components/find');
var Form = require('./components/form');
var Login = require('./models/login');

var login = new Login({email:"alex@api.ru", password: '1234'});

ReactDOM.render(
    <Form model={login}/>,
    document.getElementById('example')
);