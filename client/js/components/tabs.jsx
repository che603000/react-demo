/**
 * Created by alex on 11.11.2015.
 */
//import {Tabs, Tab, Nav, MenuItem} from "react-bootstrap"

// components
import LoginForm  from './form';
import TabDropdown  from './tab-dropdown';


class Pane extends React.Component {

    state = {
        isActive: !!this.props.active
    }

    constructor(props) {
        super(props);

    }

    setSelect(value) {
        this.setState({isActive: value});
    }

    render() {

        var _className = this.state.isActive ? "tab-pane active" : 'tab-pane';
        return (
            <div className={_className}>{this.props.context}</div>
        )

    }
}

class Tab extends React.Component {

    state = {
        isActive: !!this.props.active
    }

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    setSelect(value) {
        this.setState({isActive: value});
    }

    onSelect(e) {
        //this.setSelect(true);
        this.props.onSelect && this.props.onSelect(this);
        console.log(e);
    }

    render() {

        var _className = this.state.isActive ? "active" : '';
        return (
            <li className={_className}>
                <a href={"#"+this.props.title} onClick={this.onSelect}>{this.props.title}</a>
            </li>
        )


    }
}

class Tabs extends React.Component {

    state = {
        activeTab: !!this.props.active
    }

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    setSelect(value) {
        this.setState({isActive: value});
    }

    onSelect(tab) {
        //this.setSelect(true);
        this.setState({activeTab: tab});
        for (let p in this.refs)
            this.refs[p].setSelect(this.refs[p] === tab);

        this.props.onSelect && this.props.onSelect(this.state.activeTab);
        //console.log(e);
    }

    render() {
        let _className = this.state.isActive ? "active" : '',
            tabs = this.props.children.map((tab, index)=> {
                let text = '_tab' + index;
                return React.cloneElement(tab, {
                    ref: text,
                    key: index,
                    title: tab.props.title || text,
                    onSelect: this.onSelect
                });
            });


        return (
            <div>
                <ul className="nav nav-tabs">{tabs}</ul>
                <div className="tab-content">
                    {
                        tabs.map((t,i)=>{
                            return(
                            <Pane key={i} ref={"pane"+i} active={t.props.active} context={t.props.children}/>
                                )
                            })
                        }
                </div>
            </div>
        )

    }
}


export default class ControlledTabs extends React.Component {

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(tab) {
        this.setState({activeTab: tab});
        for (let t in this.refs)
            this.refs[t].setSelect(this.refs[t] === tab);
    }

    render() {
        return (
            <Tabs>
                <Tab title="TAB 1111" active>
                    <LoginForm model={this.props.model}/>
                </Tab>
                <Tab title="TAB 2222"/>
            </Tabs>
        );
    }
}
