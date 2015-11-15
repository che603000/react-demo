/**
 * App Created by alex on 12.10.2015.
 */

// init app
import './init';

// models
import LoginModel from './models/login';

// components
//import LoginForm  from './components/form';
import LoginForm from './components/_form'

var login = new LoginModel({
    email: "alex@api.ru",
    password: '123'
});
ReactDOM.render(
    <LoginForm model={login}></LoginForm>,
    document.getElementById('example')
);

