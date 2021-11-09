
export const selectService = (service) => {
    return {
        type: "SELECT_SERVICE",
        selectedService: service
    }
}

export const loadDataSource = (data) => {
    return {
        type: "LOAD_DATASOURCE",
        dataSource: data
    }
}
