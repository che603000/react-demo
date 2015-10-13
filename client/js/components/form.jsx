var React = require('react');


var Form = React.createClass({
    getInitialState: function () {
        this.model = this.props.model;
        return this.model.toJSON();
    },
    onEmail: function (e) {
        this.model.set({email: e.target.value});
    },
    onSubmit: function (e) {
        e.preventDefault();
        this.model.save();

    },

    componentDidMount: function () {

        this.model.load();
    },
    render: function () {
        return (
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" onChange={this.onEmail} value={this.state.email} className="form-control"
                           placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label >Пароль</label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>

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