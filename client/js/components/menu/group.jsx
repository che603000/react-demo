/**
 * Created by alex on 15.10.2015.
 */



export default class Group extends  React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
};

