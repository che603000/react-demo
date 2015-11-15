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
        return (
            <div className={this.__className}>{this.props.pane}</div>
        )

    }

    // privates
    get __className() {
        return this.state.isActive ? "tab-pane pane active" : 'tab-pane';
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
        //console.log(e);
    }

    render() {
        return (
            <li className={this.__className}>
                <a href="#" onClick={this.onSelect}>{this.props.title}</a>
            </li>
        )


    }

    // privates
    get __className() {
        return this.state.isActive ? "active" : '';
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

    onSelect(activeTab) {

        this.setState({activeTab: activeTab});

        this._tabForEach((tab, pane)=> {
            let _active = tab === activeTab;
            tab.setSelect(_active);
            pane.setSelect(_active);
        });

        this.props.onSelect && this.props.onSelect(this.state.activeTab);
        //console.log(e);
    }

    render() {
        let tabs = this._tabRender(),
            panes = this._paneRender(tabs);
        return (
            <div>
                <ul className="nav nav-tabs">{tabs}</ul>
                <div className="tab-content">{panes}</div>
            </div>
        )
    }

    _tabId(index) {
        return '_tab' + index;
    }

    _paneId(tabId) {
        return tabId + "_pane";
    }

    _paneRender(tabs) {
        return tabs.map((tab, index)=> {
            return (
                <Pane key={index}
                      ref={this._paneId(tab.props.tabId)}
                      tabId={tab.props.tabId}
                      active={tab.props.active}
                      pane={tab.props.children}/>
            )
        })
    }

    _tabRender() {
        return this.props.children.map((tab, index)=> {
            let tabId = this._tabId(index),
                paneId = this._paneId(tabId);
            return React.cloneElement(tab, {
                key: index,
                ref: tabId,
                tabId: tabId,
                paneId: paneId,
                title: tab.props.title || tabId,
                onSelect: this.onSelect
            });
        }, this);
    }

    _tabForEach(fn) {
        for (var p in this.refs)
            if (this.refs[p] instanceof Tab) {
                let tab = this.refs[p],
                    pane = this.refs[tab.props.paneId];
                fn(tab, pane);
            }

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
                    <p/>
                    <LoginForm model={this.props.model}/>
                </Tab>
                <Tab title="TAB 2222">
                    <p/>
                    <pre>
                       this.setState(...);
                    </pre>
                </Tab>
            </Tabs>
        );
    }
}
