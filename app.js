import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const Title = (
    <div>
        <h1>Hello, JSX🚀</h1>
        <h3>Title</h3>
    </div>
);

// React component - functional component
const HeadingComponent = () => 
(
    <div>
        <h1>{Title}</h1>
        <h2>Functional Component</h2>
    </div>

);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);