/**
 * Created by alex on 12.10.2015.
 */

_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

var jj = [1,2,3,4].filter((d,i)=>{ return d});

var Find = require('./components/find');
var Form = require('./components/form');
var Login = require('./models/login');

var login = new Login({email:"alex@api.ru", password: '12'});

ReactDOM.render(
    <Form model={login}/>,
    document.getElementById('example')
);