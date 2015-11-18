/**
 * Created by alex on 15.10.2015.
 */
let index = 1;

export default class Button extends React.Component {

    state = {
        active: !!this.props.active
    }


    constructor(props) {
        super(props);
    }

    get onClick() {
        return ()=> {
            this.props.onSelect(this);
        }
    }

    get _id() {
        if (!this.__id)
            this.__id = index++;
        return this.__id;
    }

    setActive(value) {
        this.setState({active: value || (!this.state.active)});
    }

    render() {
        const _href = this.state.active ? ("./#menu/" + this._id) : "#",
            _className = "app-button-menu " + this.props.img || "";

        return (
            <a href={_href} className={_className} onClick={this.onClick} title={this.props.title}></a>
        )
    }
};

