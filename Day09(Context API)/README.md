## Props Drilling
* Whenever we pass any data using props concept in between more than two or three Comp then it is called as Props Drilling.
* But in this case, If in between any Comp does not receive the Data then it can not pass the Data to other Comp and This is a major drawback of Props Drilling concept.
* Also Props Drilling is a very complex way to pass the Data in between more than two or three Comp.
* Also if we update the State/data in the parent Comp then it will re-render all its child Comp which is not necessory. So, this will affect the performance of the Application.

## React Context API
* To solve the above listed Props Drilling problems React Context came in picture.
* Context is nothing but a simple Space where we can store some Data.
* And this Data we can share with the any Child Comp directly.
* Basically, Parent Comp will store the Data inside Context and any Child Comp can Access the Data. But Child Comp can not store the Data inside Context directly.

## Steps to Implement React Context API
1. Create Context
    Ex=> available in day03/src/comp/context/context

2. Import Created Context inside Parent Comp
    Ex=> available in day03/src/comp/context/Context_API_Test/A1

3. Wrap all the Child Comp inside a pre-defined Comp called Provider Comp
    Ex=> available in day03/src/comp/context/Context_API_Test/A1

4. The Provider Comp will take one props and the key name is 'value'
* Using this 'value' props, we can pass the Data inside the Context.
    Ex=> available in day03/src/comp/context/Context_API_Test/A1

5. Use useContext() hook to access the Data inside Child Comp
    Ex=> available in day03/src/comp/context/Context_API_Test/D1

## useContext() hook
* It is a hook in React using which we can access the data on Context inside the Child Comp.
* Ex=> available in day03/src/comp/context/Context_API_Test/D1