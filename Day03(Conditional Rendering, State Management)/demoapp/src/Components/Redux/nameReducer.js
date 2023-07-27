
let initialData = "Dummy Data";

const nameReducer = (state = initialData, action) => {

    if(action.type==='NAME'){
        state = action.payload
    }
    
    return state;
}

export default nameReducer;