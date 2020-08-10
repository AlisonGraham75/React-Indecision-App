console.log('App.js is running')

//JSX - JavaScript XML 
var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some Info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

//New JSX expression
var templateTwo = (
    <div>
        <h1>Alison Graham</h1>
        <p>Age: 45</p>
        <p>Location: Colorado Springs</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);