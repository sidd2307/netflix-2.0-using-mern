export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
})

export const getMoviesSuccess= (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
})

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
})

// Delete Movies

export const deleteMovieStart = () => ({
    type: "DELETE_MOVIES_START",
})

export const deleteMovieSuccess= (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id,
})

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIES_FAILURE",
})

// Create Movies
export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
})

export const createMovieSuccess= (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
})

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
})

// Update Movies
export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
})

export const updateMovieSuccess= (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
})

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
})
