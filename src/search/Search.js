import React from 'react'
import "./Search.css"
import {BrowserRouter as Router,Link} from 'react-router-dom'

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state={
            query:""
        }
    }

    updateQuery = (query) => {
        this.setState({
                       query: query
                      })
    }





    render(){

        return(

            <div className="container mt-3">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search By Movie Title, Genre,
                actors, release date, language, etc...."  defaultValue={this.state.query} onChange={()=>{
                    const query = document.getElementById("search-bar").value
                    this.updateQuery(query)}}
                       aria-label="search query" id="search-bar"/>
                    <div className="input-group-append">
                        <Link to={`/search/${this.state.query}`}>
                            <button className="btn btn-secondary" id="search-button"
                                type="button">Search</button>
                        </Link>
                    </div>
            </div>
            </div>

        )
    }
}

export default Search