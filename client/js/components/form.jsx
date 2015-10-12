var React = require('react');

var Form = React.createClass({
    render: function () {
        return (
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"  placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label >Пароль</label>
                    <input type="password" className="form-control"  placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label >File input</label>
                    <input type="file" />

                    <p className="help-block">Example block-level help text here.</p>
                </div>

                <div className="checkbox">
                    <label>
                        <input type="checkbox"/> Проверить меня
                    </label>
                </div>
                <button type="submit" className="btn btn-default">Отправить</button>
            </form>
        );
    }
});

module.exports = Form;