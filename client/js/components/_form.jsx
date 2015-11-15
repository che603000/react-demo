import FieldText from './_fields/field-text'
import Message from './fields/message'
import FieldCheckbox from './_fields/field-checkbox'

//let template = (model, state) => {
//    return model.validationError ? model.validationError.xhr.status : '';
//}

export default class LoginForm extends React.Component {

    get model(){
        return this.props.model
    }

    get onSubmit() {
        return (e) => {
            e.preventDefault();
            this.props.model.save();
        }
    }

    render() {
        return (
            <form >
                <FieldText label="Логин" type="mail" validate name="email"
                           placeholder="Email как логин для приложения"
                           model={this.model}/>
                <FieldText label="Пароль" type="password" validate className="form-control" name="password"
                           placeholder="Пароль мин 4 знака" model={this.model}/>
                <FieldText label="Пароль повторно" type="password" validate className="form-control"
                           name="passwordConfirm"
                           placeholder="Пароль еще раз для контроля" model={this.model}/>
                <FieldCheckbox name="memory" label="Запомнить меня" model={this.model}/>
                <Message model={this.model} label="Error: " className="alert alert-danger"/>
                <div className="form-group">
                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Отправить</button>
                </div>

            </form>

        );
    }
}
