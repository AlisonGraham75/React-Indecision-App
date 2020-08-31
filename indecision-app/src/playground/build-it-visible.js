
const app = {
    title: 'Visibility Toggle',
    details: 'These are some awesome details',
    showDetails: false
};


let visibility = false;
const toggleVisibility = (e) => {
    visibility = !visibility;
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Some details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};

renderApp();