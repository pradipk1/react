## Life Cycle of Human
* Period from Birth to Death.
* We have different phases like
    * Child Phase
    * Young Phase
    * Old Phase


## Life Cycle of a React Component
* Period from React Comp loads in DOM to removed from the DOM.
* There are three main phases of React Comp during it's life cycle
    ### Mount Phase
    * Whenever a React Comp gets loaded into the DOM.

    ### Unmount Phase
    * Whenever React Comp is removed from the DOM.

    ### Update Phase
    * Whenever State gets Updated in the Comp or 
    Comp is re-rendered.
    * Before going into Update Phase, The Comp goes first in Unmount Phase 
    and then goes into Upadate Phase.
    * Ex=> Available in day03/src/comp/phases


# What is hook?
* Hooks are some predefined JS functions in React.
* In React any function which starts with the "use" word then such kind of functions 
are called as hooks.
* Ex=> useState(), useEffect(), useRef(), useContext(), useSelector() etc.

* All the hooks should be always on the top inside the Comp before declaring any function and return statement.
* Ex=> Available in day03/src/comp/phase/cardd


# useEffect() hook
* This is a hook provided by React.
* Using this hook, we may need to perform certain Actions whenever React Comp is in a specific phase.
* These Actions are called as Side effects.
* In react, any Action which is performed without taking the help of React Library or React API are 
known as Side Effects.
* Ex=> fetch() method, localstorage or session storage etc are not related to React Library. So we 
can say taht these are the Sise Effects.

* useEffect() hook is a special function which will help us to perform Side Effects (actions) whenever 
React Comp is under certain Phase.

### Syntax of useEffect()
* It takes two argument, one is a callback function and other is an array.
* useEffect(()=>{
    {write your logic}
    return ()=>{-----}
}, []);
* Inside callback function, it can also return a callback function.

* useEffect() hook will be called by React once the Comp is rendered.
* If we do not pass array as 2nd argument then whenever useeffect() will be called, it will call its callback function in both Mount phase and Update phase.
* If we pass an empty array as 2nd argument then useEffect() will call its callback function only in Mount phase not in Update phase.
* Inside callback function, useEffect() returns a function which is called only just before the Comp enters into Unmount phase.
* Generally this return statement is used to delete or remove some data from the Comp or from some certain place before removing the Comp from DOM.
