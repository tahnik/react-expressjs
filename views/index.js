import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return(
            <div className="helloWorld">
                <h1 className="helloWorldText">Hello World</h1>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("reactbody"));
