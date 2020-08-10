'use strict';

console.log('App.js is running');

//JSX - JavaScript XML 
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some Info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

//New JSX expression
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Alison Graham'
    ),
    React.createElement(
        'p',
        null,
        'Age: 45'
    ),
    React.createElement(
        'p',
        null,
        'Location: Colorado Springs'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
