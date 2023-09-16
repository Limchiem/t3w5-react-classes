import React from "react";

// Extend from component to make sure that it works as a react component
export default class PokemonDisplay extends React.Component{
    constructor(props){
        super(props);

        // State stores data per component
        this.state = {
            pokemonName : null
        }
    }

    render(){
        return(
            <div>
                <h1>Some content here</h1>
            </div>
        )
    }
}