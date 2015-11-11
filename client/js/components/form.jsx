import FieldInput from './fields/input'
import Message from './fields/message'
import FieldCheckbox from './fields/checkbox'

//let template = (model, state) => {
//    return model.validationError ? model.validationError.xhr.status : '';
//}

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.model.save();
    }

    render() {
        return (
            <form >
                <FieldInput label="Email" type="text" name="email" placeholder="Email как логин для приложения"
                            model={this.props.model}/>
                <FieldInput label="Пароль" type="password" className="form-control" name="password"
                            placeholder="Пароль мин 4 знака" model={this.props.model}/>
                <FieldInput label="Пароль повторно" type="password" className="form-control" name="passwordConfirm"
                            placeholder="Пароль еще раз для контроля" model={this.props.model}/>
                <FieldCheckbox name="memory" label="Запомнить меня" model={this.props.model}/>
                <Message model={this.props.model} label="Error: " className="alert alert-danger"/>
                <div className="form-group">
                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Отправить</button>
                </div>

            </form>

        );
    }
}
