export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

//Action creators
export function addMovies(movies){
    return {
        type:'ADD_MOVIES',
        movies:movies
      }
} 

export function addfavourite(movie){
  return {
      type:'ADD_TO_FAVOURITES',
      movie:movie
    }
} 

export function removeFromFavourites(movie){
  return {
      type:'REMOVE_FROM_FAVOURITES',
      movie:movie
    }
} 