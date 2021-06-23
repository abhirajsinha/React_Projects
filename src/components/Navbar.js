import React, { Component } from 'react'
import { data } from '../data';
import {handleSearch} from '../actions'

export default class Navbar extends Component {
      
    handleSearch=()=>{
        const{searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleChange=(e)=>{
        this.setState({
           searchText:e.target.value 
        })
    }

    render() {
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn">Search</button>
                </div>
            </div>
        )
    }
}
