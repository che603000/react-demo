/**
 * App Created by alex on 12.10.2015.
 */

// init app
import './app-setup';


// models
import LoginModel from './models/login';

// components
//import LoginForm  from './components/form';
import Form from './components/_form'

var login = new LoginModel({
    email: "alex@api.ru",
    password: '123'
});
ReactDOM.render(
    <Form model={login}></Form>,
    document.getElementById('example')
);

