/**
 * Created by alex on 15.10.2015.
 */

export default class FieldText extends React.Component {
    static defaultProps = {
        validate: false,
        classGroup: 'form-group',
        classGroupError: 'form-group has-error',
        classInput: "form-control"
    }
    state = {
        isValid: true
    }

    get model() {
        return this.props.model;
    }

    get value() {
        return this.model.get(this.props.name);
    }

    set value(val) {
        this.model.set(this.props.name, val);
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.model.on('change:' + this.props.name, this.onChangeModel, this);
        this.props.validate && this.model.on('validated', this.onValidated, this);
    }

    componentWillUnmount() {
        this.model.off('change:' + this.props.name, this.onChangeModel, this);
        this.props.validate && this.model.off('validated', this.onValidated, this);
    }

    onValidated(isValid, model, errors) {
        this.setState({isValid: !errors[this.props.name], message: errors[this.props.name] || ''});
    }

    onChangeModel(model, value) {
        this.forceUpdate();
    }

    get onChange() {
        return e => {
            this.value = this._componentValue(e);
        }
    }

    _componentValue(e) {
        return e.target.value;
    }

    get _classGroup() {
        return this.state.isValid ? this.props.classGroup : this.props.classGroupError;
    }

    render() {
        return (
            <div className={this._classGroup}>
                <label>{this.props.label}</label>
                <input type={this.props.type}
                       className={this.props.classInput}
                       value={this.value}
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       onChange={this.onChange}
                />
                <small className="help-block">{this.state.message}</small>
            </div>
        )
    }
};

