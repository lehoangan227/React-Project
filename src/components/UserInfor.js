import React from "react";

class UserInfor extends React.Component{
    state = {
        name: "An",
        age: 25
    };


    handleOnChangeName(event){
        this.setState({
            name : event.target.value
        })
    }

    handleOnChangeAge(event){
        this.setState({
            age : event.target.value
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
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input value={this.state.name} type="text" onChange={(event)=>this.handleOnChangeName(event)}/>
                    <br/> 
                    <label>Your Age: </label>
                    <input value={this.state.age} type="text" onChange={(event)=>this.handleOnChangeAge(event)}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;