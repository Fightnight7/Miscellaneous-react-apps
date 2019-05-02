import React from "react"

class Test extends React.Component {
    constructor() {
        super();
        this.state = {LoggedIn: false};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState=> {
            return {
                LoggedIn: !prevState.LoggedIn
            }
        })
    }
    render(){
        return(
            <div>
            <button style={{margin: "20px", backgroundColor: "orange"}} onClick={this.handleClick}>
            {this.state.LoggedIn?<h1>"Logged In"</h1>:<h1>"Logged Out"</h1>}
    </button>
        </div>
    )
    }
}

export default Test;