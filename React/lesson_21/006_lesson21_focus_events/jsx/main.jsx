var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // onFocus - фокус на элементе 
        // onBlur - элемент теряет фокус 

        var Demo = React.createClass({

            focusHandler: function (e) {
                e.stopPropagation();
                e.target.style.backgroundColor = 'red';
                
            }, 

            blurHandler: function (e) {
                e.stopPropagation();
                e.target.style.backgroundColor = 'transparent'; 
                
            },

            render: function() {
                return (
                <div>
                    <div className="form-group">
                        <label>Input field: <br/>
                            <input className="input-lg form-control" type="text" onFocus={this.focusHandler} onBlur={this.blurHandler}/>
                        </label>
                    </div>
                <div id="output"></div>
                </div>
                
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container);
