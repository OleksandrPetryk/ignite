var React = require('react');
var ReactDOM = require('react-dom');

var Demo = React.createClass({

    clickHandler: function (event) {
        alert('See console for info');

        var eventType = event.type; // => "click"
        event.persist(); // удаление события из пула

        setTimeout(function () {
            console.log('async event type: ' + event.type); // => "click"
            console.log('sync event type: ' + eventType); // => "click"
        }, 0);
    },

    render: function () {
        return (
                <button onClick={this.clickHandler}>Click!</button>
            )
    }
})

var container = document.getElementById('example');
ReactDOM.render(<Demo />, container); 