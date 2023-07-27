import reduxStore from "./Store"


export const nameAction = (name) => {
    reduxStore.dispatch({
        type:"NAME",
        payload:name
    })
}