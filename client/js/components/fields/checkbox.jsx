/**
 * Created by alex on 15.10.2015.
 */

export default class Checkbox extends React.Component {

    get model() {
        return this.props.model;
    }

    get value() {
        return this.model.get(this.props.name);
    }
    set value(val) {
        this.model.set(this.props.name, val);
    }

    //constructor(props) {
    //    super(props);
    //}

    componentWillMount() {
        this.model.on('change:' + this.props.name, this.onChangeModel, this);
    }

    componentWillUnmount() {
        this.model.off('change:' + this.props.name, this.onChangeModel, this);
    }

    onChangeModel(model, value) {
        this.forceUpdate();
    }

    get onChange() {
        return e => { this.value = this._componenValue(e);}
    }

    _componenValue(e) {
        return e.target.checked;
    }

    render() {
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox"
                           checked={this.value}
                           name={this.props.name}
                           onChange={this.onChange}
                        />
                    {this.props.label}</label>
            </div>
        )
    }
};

