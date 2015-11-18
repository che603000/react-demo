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
                <Group className="app-group-menu-left">
                    <Button onSelect={this.onSelect} ref="b1" img="icon-layers2"/>
                    <Button onSelect={this.onSelect} ref="b2" label="Test"/>
                    <Button onSelect={this.onSelect} ref="b3"/>
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

