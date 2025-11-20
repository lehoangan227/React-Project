import React, { version } from "react";
class MyComponent extends React.Component{
    state = {
        name: "An",
        age: 25
    };

    handleClick(event){
        // console.log("click me");
        this.setState({
            name : "BoBo",
            age : Math.floor((Math.random()*100)+1)
        });
    }

    handleOnChange(event){
        
        this.setState({
            name : event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
                My name is {this.state.name} and is {this.state.age} years old.
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event)=>this.handleOnChange(event)}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;