import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movieInput: 'batman',
             genre: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name   = target.name;
        const value  = target.value;

        this.setState(
            {[name]: value},
            () => {
                this.props.fetchMovies(this.state.movieInput, this.state.genre);
                console.log(this.state.movieInput);
                console.log(this.state.genre);
            }
        );

    }
    
    render() {
        return (
            <div className="formWrapper">
                <form>
                    <input autoComplete='off' name="movieInput" type="text" value={this.state.movieInput} onChange={this.handleChange} placeholder="type in a movie title..."/>
                    <select name="genre" value={this.state.genre} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="game">Game</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Form
