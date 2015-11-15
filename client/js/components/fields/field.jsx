/**
 * Created by alex on 15.10.2015.
 */


export default class Message extends React.Component {
    state = {
        status: '',
        message: '',
        classMessage: 'hide'
    }

    constructor(props) {
        super(props);
        this.model = this.props.model;
    }
    componentWillMount(){
        this.model.on('validated', this.onValidated, this);
    }
    componentWillUnmount(){
        this.model.off('validated', this.onValidated, this);
    }
    onValidated(isValid, model, errors) {
        var xhr = errors['xhr'];
        if (xhr)
            this.setState({classMessage: this.props.className, status: xhr.status, message: xhr.statusText});
        else
            this.setState({classMessage: 'hide', message: '', status: ''});
    }

    template() {
        return this.props.label + this.state.status + ' - ' + this.state.message;
    }

    render() {
        var mes = this.props.template ? this.props.template(this.props.model, this.state) : this.template();
        return (
            <div className="form-group">
                <div className={this.state.classMessage}>{mes}</div>
            </div>
        )
    }
}


