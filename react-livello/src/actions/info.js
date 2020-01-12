

export function wearFetchInfoSuccess(wear) {
    return({
        type: "INFO_FETCH_SUCCESS",
        wear
    })
}

export function wearFetchInfo(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if(!response.ok){
                    alert(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(wear => {dispatch(wearFetchInfoSuccess(wear))})
    }
}