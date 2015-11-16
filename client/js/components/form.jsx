import {Text, Checkbox, Message} from  './fields'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }


    state = {
        disabled: false
    }

    get model() {
        return this.props.model
    }

    get onSubmit() {
        return (e) => {
            e.preventDefault();
            this.props.model.save()
        }
    }

    componentWillMount() {
        this.model.on('request', ()=> this.setDisabled(true));
        //this.model.on('sync error', ()=> this.setDisabled(false));
    }

    componentWillUnmount() {
        //this.model.off('sync error', null, this);
        //this.model.off('request', null, this);
    }

    setDisabled(value) {
        this.setState({disabled: value})
    }

    render() {
        return (
            <form >
                <Text label="Логин"
                      type="mail"
                      validate
                      name="email"
                      disabled={this.state.disabled}
                      placeholder="Email как логин для приложения"
                      model={this.model}/>

                <Text label="Пароль"
                      type="password"
                      disabled={this.state.disabled}
                      validate
                      className="form-control" name="password"
                      placeholder="Пароль мин 4 знака" model={this.model}/>

                <Text label="Пароль повторно"
                      type="password"
                      disabled={this.state.disabled}
                      validate
                      className="form-control"
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
