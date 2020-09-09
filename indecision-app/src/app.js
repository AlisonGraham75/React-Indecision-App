//Goal is to not define all of the elements in JSX. 
//Goal is to compose the page using React components
class Header extends React.Component {
    //Required react method
    render() {
        //returns JSX
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }

}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));