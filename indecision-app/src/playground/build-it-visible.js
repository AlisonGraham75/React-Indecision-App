
// const app = {
//     title: 'Visibility Toggle',
//     details: 'These are some awesome details',
//     showDetails: false
// };


// let visibility = false;
// const toggleVisibility = (e) => {
//     visibility = !visibility;
//     renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const jsx = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Some details</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, appRoot);
// };

// renderApp();
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Visibility Toggle';
        this.details = 'These are some awesome details';
        this.showDetails = false;
        this.state = {
            visibility: false
        };
        
    }

    handleToggleVisibility () {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            }
        });

        
    }

    render() {
        return (
            <div>
             <h1>{this.title}</h1>
             <button onClick={this.handleToggleVisibility}>this.state.visibility</button>
             {visibility && (
                 <div>
                     <p>Some details</p>
                 </div>
             )}
         </div>
        );
    }
}
ReactDom.render(<VisibilityToggle />, document.getElementById('app'));