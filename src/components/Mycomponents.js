import React from "react";
class MyComponent extends React.Component{
    state = {
        name: "An",
        age: 25
    };

    render(){
        return (
            <div>
                My name is {this.state.name} and is {this.state.age} years old.
            </div>
        );
    }
}

export default MyComponent;