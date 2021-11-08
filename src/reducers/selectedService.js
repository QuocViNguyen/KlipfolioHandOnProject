const selectServiceReducer = (state = {}, action) => {
    switch (action.type){
        case 'SELECT_SERVICE':
            return action.selectedService
        default:
            return state
    }
}

export default selectServiceReducer;