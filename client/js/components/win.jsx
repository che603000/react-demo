/**
 * Created by alex on 11.11.2015.
 */
//import {Tabs, Tab, Nav, MenuItem} from "react-bootstrap"

// components
import LoginForm  from './form';


export default class Win extends React.Component {

    state = {
        isClose: false
    }

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.onShow = this.onShow.bind(this);
    }

    onShow(){
        this.setState({isClose: false});
    }

    onClose() {
        this.setState({isClose: true});

    }

    render() {
        if (!this.state.isClose)
            return (
                <div className={this.state.isClose? "hide": "alert alert-warning"}>
                    <button type="button" onClick={this.onClose} className="close">×</button>
                    <LoginForm model={this.props.model}/>
                </div>
            );
        else
            return (<button onClick={this.onShow}>Show</button>)
    }
}
