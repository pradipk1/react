### Using CRA, some following dependencies created automatically
* react => To create React Elements
* react-dom => To insert the React Elements into DOM
* babel => To conert JSX code into JS
* react-script => To start and stop the React application

#### Component rendering => Component call => function call

# What is State?
* State is a special variable in React.
* State can store any type of data.
* Whenever State changes then the Component also get rendered in the DOM.

* Using useState(), we can create a State variable.
* useState() returns an array of length two.
* Ex: const [state, setState] = useState();

### What is setState()?
* It will update the State.
* It will re-render the Component if and only if prev State and new State value both are different.
* It is an asychronous function that means it takes some time to update the State.