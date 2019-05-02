import React, {Component} from "react"
import classes from "./Forms.module.css"

class Forms extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "Turkey",
            dietaryRestrictions: {
                Vegetarian: false,
                Lactose: false,
                Kosher: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event){
        event.target.type === "checkbox"?
            (this.setState({[event.target.name]: event.target.checked})):
            (this.setState({[event.target.name]: event.target.value}))
    }

    handleClick(){
        alert(
            (this.state.firstName===""?alert("First Name Invalid"): "First Name: " + this.state.firstName) +
            (this.state.lastName===""?alert("Last Name Invalid"): "\nLast Name: " + this.state.lastName) +
            (this.state.age===""?alert("Age Invalid"): "\nAge: " + this.state.age) +
            (this.state.gender===""?alert("Gender Invalid"): "\nGender: " + this.state.gender) +
            "\nDestination: " + this.state.destination + "\n" +
            ((this.state.dietaryRestrictions.Vegetarian===true || this.state.dietaryRestrictions.Lactose===true || this.state.dietaryRestrictions.Kosher===true)?"Dietary" +
                " Restriction:": "") +
            (this.state.dietaryRestrictions.Vegetarian? " Vegetarian ":"") +
            (this.state.dietaryRestrictions.Lactose? " Lactose ":"") +
            (this.state.dietaryRestrictions.Kosher? " Kosher":"")
        )
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <form className={classes.form}>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"/>
                    <br/>
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"/>
                    <br/>
                    <input
                        type="number" name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"/>
                    <br/>
                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                            placeholder="Age"/> Male
                    </label>
                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                            placeholder="Age"/> Female
                    </label>
                    <br/>
                    <br/>
                    <select
                        onChange={this.handleChange}
                        name="destination"
                        value={this.state.destination}>
                            <option value="Turkey">Turkey</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Tailand">Tailand</option>
                    </select>
                    <br/>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="Vegetarian"
                            checked={this.state.dietaryRestrictions.Vegetarian}
                            onChange={this.handleChange}
                        /> Vegetarian
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="Lactose"
                            checked={this.state.dietaryRestrictions.Lactose}
                            onClick={this.handleChange}
                        /> Lactose-free
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="Kosher"
                            checked={this.state.dietaryRestrictions.Kosher}
                            onClick={this.handleChange}
                        /> Kosher
                    </label>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={this.handleClick}>Send</button>
                </form>
            </div>
        )
    }
}

export default Forms;