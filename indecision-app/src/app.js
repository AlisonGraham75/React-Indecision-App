console.log('App.js is running')

var app = {
    title: 'Indecision App' ,
    subtitle: 'This is some info',
    options: ['One', 'Two']
}

//JSX - JavaScript XML 
var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length >0 ? 'Here are your options' : 'No options'}  </p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

//New JSX expression
var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

//Rendering dynamic content using ternary operators and logical AND operator
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);