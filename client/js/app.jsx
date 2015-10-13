/**
 * Created by alex on 12.10.2015.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var Find = require('./components/find.jsx');
var Form = require('./components/form.jsx');
var Login = require('./models/login');

var login = new Login({email:"alex@api.ru"});

ReactDOM.render(
    //<Find url="./data/load.json"/>,
    <Form model={login}/>,
    document.getElementById('example')
);