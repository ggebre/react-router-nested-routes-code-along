import React from 'react' 
const MovieShow = ({match, movies}) => {
    console.log(match)
    // match is a prop passed from MoviesPage as routerProps and it is an option holding
    // {path: "...", url: ""}
    return (
        <div>
            <h3>{movies[match.params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow