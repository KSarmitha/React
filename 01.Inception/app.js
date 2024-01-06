// using JS
const rootElement = document.getElementById('root');
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World From JS!';

rootElement.appendChild(heading);

// using React
// const container = React.createElement('h1',{id: 'heading'},'Hello World From React!');
// netsed React elements
{/* <div id="root">
    <div id="block1">
        <h1>heading1</h1>
        <h2>heading2</h2>
    </div>
    <div id="block2">
        <h1>heading3</h1>
    </div>
</div> */}
const container = [
    React.createElement('div',{id: 'block1'},
    [
        React.createElement('h1', {} , 'heading1'),
        React.createElement('h2', {} , 'heading2'),
    ]),
    React.createElement('div',{id: 'block2'},
        React.createElement('h1', {}, 'heading3'))
    ];
    
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);