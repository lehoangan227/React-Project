import React, { useState, version } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component{
//     state = {
//         listUser: [
//             {id: 1, name: "An", age: "30"},
//             {id: 2, name: "Bao", age: "23"},
//             {id: 3, name: "Duc", age: "31"},
//             {id: 4, name: "Dat", age: "20"}
//         ]
//     }

//     handleAddNewUser = (userObj)=>{
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUserClone
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
//                 <br/><br/>
//                 <DisplayInfor 
//                 listUser={this.state.listUser}
//                 handleDeleteUser={this.handleDeleteUser}
//                 /> 
                
//             </div>
//         );
//     }
// }

const MyComponent = (props)=> {
    const [listUser, setListUser] = useState(
        [
            {id: 1, name: "An", age: "30"},
            {id: 2, name: "Bao", age: "23"},
            {id: 3, name: "Duc", age: "31"},
            {id: 4, name: "Dat", age: "20"}
        ]
    );
    const handleAddNewUser = (userObj)=>{
        setListUser([userObj,...listUser]);
    }

    const handleDeleteUser = (userId) => {
        setListUser(listUser.filter(item => item.id !== userId));
    }

    return (
            <div>
                <AddUserInfor handleAddNewUser={handleAddNewUser}/>
                <br/><br/>
                <DisplayInfor 
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
                /> 
            </div>
        );
}

export default MyComponent;