import React from "react";

class Fetch extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }
    componentDidMount() {
        this.setState({loading: true});
        fetch("https:/swapi.co/api/people/1")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    character: data,
                    loading: false
                })
            })
    }
    render(){
        const text = this.state.loading? "loading...": this.state.character.name;
        return(
            <div>
                {text}
            </div>
        )
    }
}

export default Fetch;