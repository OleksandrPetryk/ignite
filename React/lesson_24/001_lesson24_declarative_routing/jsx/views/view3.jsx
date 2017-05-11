var React = require('react'); 

class View3 extends React.Component {
    render() {
        return(
                <h3>This is view with user ID: {this.props.params.userId}</h3>
      )}
} 

module.exports = View3; 