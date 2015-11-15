/**
 * Created by alex on 15.10.2015.
 */


module.exports = React.createClass({
    getInitialState() {
        this.model = this.props.model;


        var state = {
            value: this.model.get(this.props.name),
            classGroup: 'form-group',
            message: '',
        };

        return state;

    },

    componentWillMount(){
        this.model.on('validated', this.onValidated, this);
        this.model.on('change:'+ this.props.name, this.onChangeModel, this);
    },
    componentWillUnmount(){
        this.model.off('change:'+ this.props.name, this.onChangeModel, this);
        this.model.off('validated', this.onValidated, this);
    },
    onChangeModel(model, value){
        this.setState({value: value});
    },
    onValidated (isValid, model, errors) {
        if (errors[this.props.name])
            this.setState({classGroup: 'form-group has-error', message: errors[this.props.name]});
        else
            this.setState({classGroup: 'form-group', message: ''});
    },
    onChangeValue (e) {
        this.model.set(this.props.name, e.target.value);
        this.setState({value: e.target.value});
    },
    render() {
        return (
            <div className={this.state.classGroup}>
                <label>{this.props.label}</label>
                <input type={this.props.type}
                       className="form-control"
                       value={this.state.value}
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       onChange={this.onChangeValue}
                    />
                <small className="help-block">{this.state.message}</small>
            </div>
        )
    }
});

