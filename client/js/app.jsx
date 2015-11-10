/**
 * App Created by alex on 12.10.2015.
 */

// init app
import './app-setup';

// models
import Login from './models/login';

// components
import Form  from './components/form';

var login = new Login({
    email: "alex@api.ru",
    password: '1234'
});
ReactDOM.render(
    <Form model={login}/>,
    document.getElementById('example')
);