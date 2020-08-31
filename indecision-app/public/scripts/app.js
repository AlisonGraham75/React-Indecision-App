'use strict';

var app = {
    title: 'Visibility Toggle',
    details: 'These are some awesome details',
    showDetails: false
};

var visibility = false;
var toggleVisibility = function toggleVisibility(e) {
    visibility = !visibility;
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Some details'
            )
        )
    );
    ReactDOM.render(jsx, appRoot);
};

renderApp();
