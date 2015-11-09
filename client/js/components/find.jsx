
module.exports = React.createClass({
    getInitialState: function () {
        return {
            result: [],
            style: {
                display: 'none'
            }
        };
    },

    onError: function (e) {
        this.reset([{title: e.state}]);
    },
    onClick: function (e) {
        this.reset();
        $.getJSON(this.props.url, {text: this.state.value})
            .done(this.onLoad)
            .fail(this.onError);
    },
    onLoad: function (data) {
        this.reset(data);
    },
    onChange: function (e) {
        this.reset();
        this.setState({
            value: e.target.value
        });
    },

    render: function () {
        return (
            <div className="commentBox">
                <label >Поиск:</label>
                <input onChange={this.onChange} type="text"/>
                <button onClick={this.onClick}>OK</button>
                <div style={this.state.style}>
                    <select >
                        {this.state.result.map(item => {
                            return <option value={item.value}>{item.title}</option>;
                        })}
                    </select>
                </div>

            </div>
        );
    },
    reset: function (data) {
        if(data){
            this.setState({result: data, style: {display: 'block'} });
        } else{
            this.setState({result: [], style: {display: 'none'} });
        }

    }
});
