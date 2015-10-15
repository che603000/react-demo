var React = require('react');


var Field = React.createClass({
    isValidate: true,
    getInitialState: function () {
        this.model = this.props.model;
        this.model.on('validated', this.onValidated);
        var state = {
            value: this.model.get(this.props.name),
            classGroup: 'form-group',
            message: '',
        };
        return state;
    },
    onValidated: function (isValid, model, errors) {
        if (errors[this.props.name])
            this.setState({classGroup: 'form-group has-error', message: errors[this.props.name]});
        else
            this.setState({classGroup: 'form-group', message: ''});
    },
    onChangeValue: function (e) {
        this.model.set(this.props.name, e.target.value);
        this.setState({value: e.target.value});
    },
    render: function () {
        return (
            <div className={this.state.classGroup}>
                <label>{this.props.label}</label>
                <input type={this.props.type}
                       className="form-control"
                       value={this.state.value}
                       placeholder={this.props.placeholder}
                       onChange={this.onChangeValue}
                    />
                <small className="help-block">{this.state.message}</small>
            </div>
        )
    }
});

var Form = React.createClass({
    getInitialState: function () {
        //this.model = this.props.model;
        //return this.model.toJSON();
        return {};
    },

    onSubmit: function (e) {

        e.preventDefault();
        this.props.model.save();

    },

    componentDidMount: function () {
        var c = this.refs.myForm.children;
        console.log("i");
    },
    render: function () {
        return (
                <form ref="myForm">
                    <Field label="Email" type="text" name="email" placeholder="Enter email" model={this.props.model}/>
                    <Field label="Пароль" type="password" className="form-control" name="password"
                           placeholder="Password" model={this.props.model}/>


                    <div className="form-group">
                        <label >File input</label>
                        <input type="file"/>

                        <p className="help-block">Example block-level help text here.</p>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox"/> Проверить меня
                        </label>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Отправить</button>
                </form>

        );
    }
});

module.exports = Form;