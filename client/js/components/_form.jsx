"use strict";

import {Text, Checkbox, Message} from './fields'

export default class LoginForm extends React.Component {

    get model() {
        return this.props.model
    }

    get onSubmit() {
        return (e) => {
            e.preventDefault();
            this.props.model.save();
        }
    }

    render() {
        //this.model.validate();
        return (
            <form >
                <Text label="Логин" type="mail" validate name="email"
                           placeholder="Email как логин для приложения"
                           model={this.model}/>

                <Text label="Пароль" type="password" validate className="form-control" name="password"
                           placeholder="Пароль мин 4 знака" model={this.model}/>

                <Text label="Пароль повторно" type="password" validate className="form-control"
                           name="passwordConfirm"
                           placeholder="Пароль еще раз для контроля" model={this.model}/>

                <Checkbox name="memory" label="Запомнить меня" model={this.model}/>

                <Message model={this.model} label="Error: " className="alert alert-danger"/>

                <div className="form-group">
                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Отправить</button>
                </div>

            </form>

        );
    }
}
