import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();//Never use this method, just here here to forcefully update our page because sir sows us in video
    })
    //Make Api call for movies
    //dispatch action
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    })
    console.log('State',this.props.store.getState())
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {data.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;