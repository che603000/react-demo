import FieldInput from './fields/input'
import FieldCheckbox from './fields/checkbox'


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (e) {
        e.preventDefault();
        this.props.model.save();
    }

    render() {
        return (
            <form >
                <FieldInput label="Email" type="text" name="email" placeholder="Enter email" model={this.props.model}/>
                <FieldInput label="Пароль" type="password" className="form-control" name="password"
                            placeholder="Password" model={this.props.model}/>
                <FieldInput label="Пароль повторно" type="password" className="form-control" name="passwordConfirm"
                            placeholder="Password повтор" model={this.props.model}/>
                <FieldCheckbox name="memory" label="Запомнить меня" model={this.props.model}/>
                <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Отправить</button>
            </form>
        );
    }
}
