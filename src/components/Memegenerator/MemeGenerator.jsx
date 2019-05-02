import React from "react"


class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            AllMemeImg: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https:/api.imgflip.com/get_memes")
            .then(
                response => response.json())
            .then(
                response => {
                    const {memes} = response.data;
                    this.setState({
                        AllMemeImg: memes,
                    })
                });
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})

    }

    handleClick(event) {
        event.preventDefault();
        let x = Math.floor(Math.random() * (this.state.AllMemeImg.length));
        this.setState({randomImage: this.state.AllMemeImg[x].url})
    }

    render(){
        return(
            <div>
                <form className="meme-form">
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="Top Text"/>
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        placeholder="Bottom Text"/>
                    <button onClick={this.handleClick}>Generate</button>
                </form>
                    <div className="meme">
                        <img src={this.state.randomImage} alt=""/>
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
            </div>
        )
    }
}

export default MemeGenerator