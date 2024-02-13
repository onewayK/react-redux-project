export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (stationName) => ({
    type: TOGGLE_FAVORITE,
        payload: stationName,
});