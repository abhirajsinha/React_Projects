import React, { Component } from "react";
import { addfavourite, removeFromFavourites } from "../actions";
import { data } from "../data";
import Navbar from "./Navbar";

export default class MovieCard extends Component {
  handleFavouriteCLick = () => {
    const { movie } = this.props;
    this.props.dispatch(addfavourite(movie));
  };

  handleUnFavouriteCLick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  // handleUnFavouriteCLick = () => {};
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
            isFavourite 
            ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteCLick}
              >
                UnFavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteCLick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
