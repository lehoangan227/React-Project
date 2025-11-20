import React from "react";
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

    handleOnmouseOver(event){
        console.log(event.pageX);
    }

    render(){
        return (
            <div>
                My name is {this.state.name} and is {this.state.age} years old.
                <button onMouseOver={this.handleOnmouseOver}>Hover me</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;