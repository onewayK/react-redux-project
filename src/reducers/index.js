const setFavorite = (state = [], action = {type:"", favorites: []}) => {
    switch (action.type) {
        case "SET_FAVORITE":
            return action.favorites;
        default:
            return [];
    }
}

export default setFavorite;