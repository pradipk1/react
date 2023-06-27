## Components in React
* Components are building block of React App.
* React follows Component based Architecture.
* Due to Component, we have power of Re-Usability.
* Components can be as small as one button and also can be as big as one entire page.

## Data sharing can be done between
* Parent comp to Child comp
* Child comp to Parent comp
* Sibling comp
* No-Relationship between comp

* Using props we can send Data from Parent comp to Child comp.
* Ex=> Available in Day03/src/comp/parent-child

* To send Data from Child comp to Parent comp, we have to pass setState as props to the Child 
comp and then we can call setState() inside Child comp to update the State value.
* Ex=> Available in Day03/src/comp/child-parent