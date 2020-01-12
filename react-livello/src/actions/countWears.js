export function fetchCountWearsSuccess(count) {
    return({
        type: "RECEIVED_WEARS_COUNT",
        count
    })
}

export function fetchCountWears(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(count => dispatch(fetchCountWearsSuccess(count)))
    }

}