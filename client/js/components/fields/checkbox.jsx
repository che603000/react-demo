/**
 * Created by alex on 15.10.2015.
 */

module.exports = React.createClass({
    isValidate: true,
    getInitialState: function () {
        this.model = this.props.model;
        return {
            value: !!this.model.get(this.props.name),
        };
    },

    onChangeValue: function (e) {
        this.model.set(this.props.name, e.target.checked);
        this.setState({value: e.target.checked});
    },
    render: function () {
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox"
                           checked={this.state.value}
                           name={this.props.name}
                           onChange={this.onChangeValue}
                        />
                    {this.props.label}</label>
            </div>
        )
    }
});

