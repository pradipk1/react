

// const electronicAction = (electronicData, dispatch) => {
//     dispatch({
//         type:'ELECTRONIC',
//         payload:electronicData
//     })
// }


// inside action we required 3 things : 
    // 1) storeData/electronicData
    // 2) dispatch
    // 3) Some times parameters (Optional) for fetch url

const electronicAction = (electronicData, dispatch) => {
    if(electronicData.length===0){
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);

            dispatch({
                type:'ELECTRONIC',
                payload:data,
            })
        });
    }
}

export default electronicAction;