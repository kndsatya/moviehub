import React from 'react'
import MovieService from "../services/MovieService";
import MovieCard from "../components/MovieCard";
import {BrowserRouter as Router,Link} from 'react-router-dom'

class SearchResult extends React.Component{

    constructor(props){

        super(props);
        this.query = props.match.params.query
        this.movieService = new MovieService()
        this.state = {
            resultMovies:[]
        }
    }


    componentDidMount(){
        this.movieService.search(this.query).then(
            (result)=>{

               this.setState({
                               resultMovies: result.results
                             })
            }
        )
    }

    componentWillReceiveProps(props){
        this.query = props.match.params.query
        this.movieService.search(this.query).then(
            (result)=>{

                this.setState({
                                  resultMovies: result.results
                              })
            }
        )
    }


    render(){

        return(
            <div>
                {
                    this.state.resultMovies.length === 0?<div></div>
                                                        :
                    <div className="container-fluid mt-3">
                        <div className="row">

                            {
                                this.state.resultMovies.map((movie) => {
                                                          return (<MovieCard key={parseInt(movie.id)} movie={movie}/>)
                                                      }
                                )
                            }

                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default  SearchResult