
var FieldInput = require('./fields/input'),
    FieldCheckbox = require('./fields/checkbox');

var Form = React.createClass({
    es5(f1, f2){
        //ебануться можно !!!
    },
    onSubmit: function (e) {
        e.preventDefault();
        this.props.model.save();
    },
    render: function () {
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
});

module.exports = Form;