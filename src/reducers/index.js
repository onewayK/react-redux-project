const setFavorite = (state = 0, action = {type:"", favorites: []}) => {
    switch (action.type) {
        case "SET_FAVORITE":
            return state;
        default:
            return state;
    }
}

export default setFavorite;