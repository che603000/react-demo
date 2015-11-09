/**
 * Created by alex on 12.10.2015.
 */

// init app
require('./app-setup');

// models
var Login = require('./models/login');

// components
//var Find = require('./components/find');
var Form = require('./components/form');

var login = new Login({
    email: "alex@api.ru",
    password: '1234'
});
ReactDOM.render(
    <Form model={login}/>,
    document.getElementById('example')
);