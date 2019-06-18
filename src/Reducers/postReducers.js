

const Getpostsdata = (state = {}, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                data:action.payload
            }
        default:
            return state;
    }
}

export default Getpostsdata;