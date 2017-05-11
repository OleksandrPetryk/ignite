var React = require('react'); 

class View extends React.Component {
    render() {
        return (
        <div>
            <h1>Header</h1>
            <div className="panel test">{this.props.children}</div>             
        </div>
            )}
}

module.exports = View; 