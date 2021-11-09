const relatedDataSourceReducer = (state = {}, action) => {
    switch (action.type){
        case 'LOAD_DATASOURCE':
            return action.dataSource
        default:
            return state
    }
}

export default relatedDataSourceReducer;