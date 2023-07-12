## setInterval()
* It is used to start a timer as name suggests.
* It takes two arguments, first is a callback function and 2nd is a number which denotes the time in milli second.
* Syntax: setInterval(()=>{----write logic----},1000);
* It returns an id which can be caught in the new variable.
* Ex=> let intervalId = setInterval(()=>{},1000);
* inside callback function, we write our logic whatever we wanted to execute.
* This callback function is called every time after every given milli second in the 2nd argument.
* Ex=> available in day03/src/comp/timer

## clearInterval()
* It is used to stop timer.
* It takes one argument as number which is the id of that timer.
* Ex=> available in day03/src/comp/timer

## useRef()
* It is a special hook given by React which returns a reference where we can store data(the data which we don't want to change on re-rendering the Comp).
* It returns one object with only one property called current.
* Ex=> const ref1 = useRef();
        In the above ex. ref1 = { current:undefined }
        Now we can update ref1.current with the data which we want to store inside ref1.
* So we can store the data inside ref which we don't want to change after re-rendered the Comp.
* Whenever we update the ref1 value then the Comp is not re-rendered.
* Ex=> available in day03/srec/comp/timer

* Another use of useRef() can be as reference for JSX elements like we use id and classnames and we can perform any DOM Manipulation.
* Ex=> available in day03/src/comp/dom
* We can attach ref1 to any JSX element using an attribute named as 'ref'.
* Ex=> const h2Ref = useRef(null);
        <h2 ref={h2Ref}>React useRef() Concept</h2>
        In the above ex. ref1 will work as the reference of h2 element and we do any dom manipulation using h2Ref.current.
        Ex=> h2Ref.current.style.color="green"
* Here h2Ref.current is same as document.getElementById("")
* Ex=> available in day03/src/comp/dom

### Note:
* Whenever we bind the useRef() variables to the JSX element then it is mendatory that the initial value should be null as in the above example. after this internally React will update the current value with DOM node for the attached Element and then we can do any DOM Manipulation.


## Some Examples of React hooks
* useState()
* useEffect()
* useRef()
* useContext()
* useReducer()
* useMemo()
* useCallback()

## Some Examples of React-Redux hooks
* useSelector()
* useDispatch()

## Some Examples of React-Routing hooks
* useParams()
* useSearchparams()


## Un-Controlled Comp Form
* If any Comp Form Data is managed by DOM methods or any other react technique wihtout using State concept then such Components are called Un-Controlled Comp.
* Ex=> available in day03/src/comp/form/uncontrolledform

## Controlled Comp Form
* If any Comp Form Data is managed by using State concept of React then such Components are called Controlled Comp.
* Ex=> available in day03/src/comp/form/controlledform

## What is the difference between Controlled and Un-Controlled Comp?
## Which is the best way to manage the Form?