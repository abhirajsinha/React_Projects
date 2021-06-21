export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

//Action creators
export function addMovies(movies){
    return {
        type:'ADD_MOVIES',
        movies:movies
      }
} 

export function addfavourite(movie){
  return {
      type:'ADD_FAVOURITE',
      movie:movie
    }
} 