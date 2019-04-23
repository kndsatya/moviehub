import React from 'react'
import MovieService from "../services/MovieService";
import MovieCard from "../components/MovieCard";
import imageNotFound from '../resources/no_results_found.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class SearchResult extends React.Component {

    constructor(props) {

        super(props);
        this.query = props.match.params.query
        this.movieService = new MovieService()
        this.state = {
            resultMovies: []
        }
    }

    componentDidMount() {
        this.movieService.search(this.query).then(
            (result) => {

                this.setState({
                                  resultMovies: result.results
                              })
            }
        )
    }

    componentWillReceiveProps(props) {
        this.query = props.match.params.query
        this.movieService.search(this.query).then(
            (result) => {

                this.setState({
                                  resultMovies: result.results
                              })
            }
        )
    }

    render() {

        return (
            <div>
                {
                    this.state.resultMovies.length === 0 ? <div className="row justify-content-center">
                                                             <h2 className="moviehub-text">OOPS!!!! RESULT NOT FOUND</h2>
                                                         </div>
                                                         :
                    <div className="container-fluid mt-3">
                        <div className="row">

                            {this.state.resultMovies.length === 0 ? <h5></h5> :
                             this.state.resultMovies.map((movie) => {
                                                             return (<MovieCard key={parseInt(movie.id)} movie={movie}/>)
                                                         }
                             )}

                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SearchResult