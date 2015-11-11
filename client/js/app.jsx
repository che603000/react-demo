/**
 * App Created by alex on 12.10.2015.
 */

// init app
import './app-setup';


// models
import LoginModel from './models/login';

// components
//import LoginForm  from './components/form';
import Tabs from './components/tabs'

var login = new LoginModel({
    email: "alex@api.ru",
    password: '123'
});
ReactDOM.render(
    <div >
        <h1>Tabs</h1>
        <Tabs model={login}></Tabs>
    </div>,

    document.getElementById('example')
);