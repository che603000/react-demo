/**
 * Created by alex on 15.10.2015.
 */

import Text from './field-text'

export default class Checkbox extends Text {
    _componentValue(e) {
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

