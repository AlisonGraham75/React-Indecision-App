console.log('App.js is running')

const app = {
    title: 'Indecision App' ,
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {

    e.preventDefault();  //Stops full page refresh

 
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionsApp();
    }
};

const wipeArray = (e) => {
    app.options = [];
    renderOptionsApp();
};

const appRoot = document.getElementById('app');

//JSX - JavaScript XML 
const renderOptionsApp = () => {
    const template = (
    <div>
       <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? 'Here are your options' : 'No options'}  </p>
       <p>{app.options.length}</p>
       <button onClick={wipeArray}>Remove All</button> 
       <ol>
           <li>Item one</li>
           <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
           <button>Add Option</button>
       </form>
    </div>          
    );
    ReactDOM.render(template, appRoot);
};

renderOptionsApp();




