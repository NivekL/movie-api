import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movieInput: ''
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

        this.props.fetchMovies(value);
        console.log(value);

    }
    
    render() {
        return (
            <div>
                <form>
                    <input name="movieInput" type="text" value={this.state.movieInput} onChange={this.handleChange} placeholder="type in a movie title..."/>
                </form>
            </div>
        )
    }
}

export default Form
