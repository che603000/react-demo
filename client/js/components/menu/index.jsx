/**
 * Created by alex on 15.10.2015.
 */

import Group from './group'
import Button from './button'

export default class Menu extends React.Component {
    state = {
        active: false
    }

    get active() {
        return this.state.active;
    }

    set active(value) {
        this.setState({active: value});
    }

    get onSelect() {
        return (button)=> {
            if (this.active)
                this.active.setActive(false);

            if (button === this.active) {
                this.active = false;
            } else {
                button.setActive(true);
                this.active = button;
            }
        }
    }

    constructor(props) {
        super(props);

    }

    setActive(button) {
        this.setState({active: button});
    }

    render() {
        return (
            <div className="app-top-menu">
                <Group className="app-group-menu-left" key="g1">
                    <Button onSelect={this.onSelect} img="./images/layers.png" title="~~~~~~~~~~~~~~" key="1"/>
                    <Button onSelect={this.onSelect} label="Test"/>
                    <Button onSelect={this.onSelect}/>
                </Group>

                <Group className="app-group-menu-right">
                    <Button onSelect={this.onSelect}/>
                    <Button onSelect={this.onSelect}/>
                </Group>

                <Group className="app-group-menu-center">
                    <Button onSelect={this.onSelect}/>
                    <Button onSelect={this.onSelect}/>
                </Group>
            </div>
        )
    }
};

