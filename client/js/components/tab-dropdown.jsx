/**
 * Created by alex on 11.11.2015.
 */
//import {Tabs, Tab, Nav, MenuItem} from "react-bootstrap"

// components


export default class TabDropdown extends React.Component {

    state = {
        key: 1
    }

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        //alert('selected ' + key);
        this.setState({key});
    }

    render() {
        return (
            <div  role="tabpanel" aria-hidden="true" class="tab-pane fade">{this.child}</div>
        );
    }
}
