'use strict';
var  React = require('react');
var About = React.createClass({
    render: function () {
        return(
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React2</li>
                        <li>React3</li>
                        <li>React4</li>
                        <li>React5</li>
                        <li>React6</li>
                        <li>React7</li>
                    </ul>
                </p>
            </div>
        );
    }
});
module.exports = About;