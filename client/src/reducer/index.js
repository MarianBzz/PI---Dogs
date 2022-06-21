const initialState = {
    dogs = [];
}



function rootReducer(state= initialState, action) {
    switch(action.type){
        case "GET_DOGS":
            return {
                ...state,
                dogs: action.payload
            }
    }
}
export default rootReducer;
