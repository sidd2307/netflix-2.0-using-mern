export const getListsStart = () => ({
    type: "GET_LISTS_START",
})

export const getListsSuccess= (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
})

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
})

// Delete Movies

export const deleteListsStart = () => ({
    type: "DELETE_LISTS_START",
})

export const deleteListsSuccess= (id) => ({
    type: "DELETE_LISTS_SUCCESS",
    payload: id,
})

export const deleteListsFailure = () => ({
    type: "DELETE_LISTS_FAILURE",
})

// Create Movies
export const createListStart = () => ({
    type: "CREATE_LIST_START",
})

export const createListSuccess= (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
})

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
})

// // Update Movies
// export const updateMovieStart = () => ({
//     type: "UPDATE_MOVIE_START",
// })

// export const updateMovieSuccess= (movie) => ({
//     type: "UPDATE_MOVIE_SUCCESS",
//     payload: movie,
// })

// export const updateMovieFailure = () => ({
//     type: "UPDATE_MOVIE_FAILURE",
// })
