## Flux Pattern
* We can use Props concept to share data for 1 or 2 level to share the Data between the Comp.
* And we can use Context API concept for more than 2 levels to share the Data between the Comp.
* But Context API becomes very omplex when we have to share the data between two Comp who have no relationship between them.
* So, to solve this problem React came with a Pattern called Flux Pattern.

* The Flux Pattern is as
1. Create a Global Storage/State for the Application.
2. Create Actions which are simply JS functions.
3. The Comp whoever wants to store the Data will call the Action and pass the Data to it.
4. Action will Dispatch the Data and give it to the Store with the help of Dispatch function.
5. Now whichever Comp wants to access the Data they can directly access the Data from the Global State/Storage.

* React only gave this Pattern not any pre-defined functions to use this Pattern.
* Manually it is not that easy for everyone to implement this Pattern inside the Application.
* So, some people created a third party Library for Flux which provides some pre-defined function.

* Some Ex. of Flux Libraries
    * Re-flux
    * Facebook's flux
    * alt
    * react flux etc.

## Redux
* There are some Library for Flux is listed in above ex but people were not satisfied with these Libraries, So another person came in picture and he said that he will add his own customized Pattern with the Flux Pattern. And This resulted Pattern is named as Redux Pattern.

* Flux Pattern + My Pattern = Redux Pattern

* So, Redux is a third party Library which provides some pre-defined function and some set of Rules using which we can share the Data between any Comp of the Application whether they(Comp) are in relationship or in no-relationship.

* Redux can be used with any JS Application like React, Angular, JS, Vue Js etc.
* Redux becomes more popular with the React.

* Redux is a State management tool or Redux is a Library which helps us to manage State across Comp in any JS Application.
* So, if you implement Redux Pattern in React Application then we can share data between any components.


## Redux Pattern
* React Comp => Action => Dispatch => Reducer => Redux Store
* The above Redux Pattern is to store the Data inside Redux Store and not to access the Data from Redux Store.