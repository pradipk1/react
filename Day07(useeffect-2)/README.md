## When will React call useEffect()?
* After the Comp is rendered.
* That means when JSX code will be executed then useEffect() will be called.

* Inside 2nd argument of useEffect(), we can pass an empty array or we can pass array of dependencies.
* If we pass empty array then the call back function which is the first argument of useEffect() will be called only once after the Comp rendered.
* If we pass an array of dependencies or State in the 2nd argument of useEffect() then the call back function will be called when any changes occurs in the dependencies or State.
* Ex=> available in day03/src/phases/cardd.

* If we want to change the title after State get updated then we should write out logic inside useEffect() to update the title.
* Ex=> available in day03/src/counter