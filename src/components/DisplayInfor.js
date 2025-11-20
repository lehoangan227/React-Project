import React from "react";

class DisplayInfor extends React.Component{
    render(){
        const {listUser} = this.props;
        console.log(listUser);
        return (
            <div>
                {
                    listUser.map((user)=>{
                        console.log(user);
                        return (
                            <div key={user.id}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <hr/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default DisplayInfor;