

export function fetchWearItemSuccess(wearItem = []) {
    return({
        type: "ACCESS",
        payload: wearItem
    })
}

export function fetchWearItem(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if(!response.ok){
                    alert(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then((wearItem) => {
                dispatch(fetchWearItemSuccess(wearItem))
            })
    }
}