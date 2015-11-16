/**
 * Created by alex on 15.10.2015.
 */

import newId from '../../utils/newId'

export default class Text extends React.Component {

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
            this.value = this.constructor._componentValue(e);
        }
    }

    //onChange = e => {
    //    this.value = this.constructor._componentValue(e);
    //}


    static _componentValue(e) {
        return e.target.value;
    }

    get _classGroup() {
        return this.state.isValid ? this.props.classGroup : this.props.classGroupError;
    }

    get _id() {
        if (!this.__id)
            this.__id = newId('id_');
        return this.__id;
    }

    render() {
        return (
            <div className={this._classGroup}>
                <label htmlFor={this._id}>{this.props.label}</label>
                <input id={this._id}
                       type={this.props.type}
                       className={this.props.classInput}
                       value={this.value}
                       disabled={this.props.disabled}
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       onChange={this.onChange}
                />
                <small className="help-block">{this.state.message}</small>
            </div>
        )
    }
};

