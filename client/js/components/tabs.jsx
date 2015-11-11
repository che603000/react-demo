/**
 * Created by alex on 11.11.2015.
 */
import {Tabs, Tab, Nav, MenuItem} from "react-bootstrap"

// components
import LoginForm  from './form';
import TabDropdown  from './tab-dropdown';

export default class ControlledTabs extends React.Component {

    state = {
        key: 2
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
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Tab 1"><LoginForm model={this.props.model}/></Tab>
                <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>

                <TabDropdown eventKey={4} title="Tab 4">Tab 4</TabDropdown>
            </Tabs>
        );
    }
}
