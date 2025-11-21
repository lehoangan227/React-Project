import React, { version } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    state = {
        listUser: [
            {id: 1, name: "An", age: "30"},
            {id: 2, name: "Bao", age: "23"},
            {id: 3, name: "Duc", age: "31"},
            {id: 4, name: "Dat", age: "20"}
        ]
    }

    handleAddNewUser = (userObj)=>{
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    render(){
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <br/><br/>
                <DisplayInfor listUser={this.state.listUser}/> 
                
            </div>
        );
    }
}

export default MyComponent;