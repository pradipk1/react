* If setState() is called more than one time simultaneously then it updates the latest State data 
to the component and the Component renders only once.

* Ex =>
    Let initially state = 0;
    setState(state+1);
    setState(state+2);
    setState(state+3);

    The final state will be 3. Because, setState() is a asychronous. That's why all setState will be called simultaneously as (0+1), (0+2) & (0+3). So, the latest State is (0+3).

    This is called "batch update" because React first execute all the setState() and then it will update 
    the UI.

## Updater function
* If we want to avoid the above problem then we have to pass a function as an argument inside setState().
And this passed function is called as Updater function.

* Ex =>
   Let initially state = 0;
   setState((prevState)=> prevState + 1);
   setState((prevState)=> prevState + 2);
   setState((prevState)=> prevState + 3);

   So, here the Component is rendered only one time but for every setState() the prevState value is different.
   For first setState, prevState = 0 and after the execution of first setState(), the State becomes 0+1=1.
   For 2nd setState, prevState = 1 and after the execution of first setState(), the State becomes 1+2=3.
   For 3rd setState, prevState = 3 and after the execution of first setState(), the State becomes 3+3=6.


## Module.css
* It is a feature of React.
* It is used to Style the Components.
* It avoids overlapping of one style on another.
* If we want to use this then the css file name should be as File_Name.module.css
* Import this css file into JS file as (import any_name from "./File_Name.module.css")