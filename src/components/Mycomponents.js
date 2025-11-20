import React, { version } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    render(){
        const myInfor = ["ab", "c", "d"];
        return (
            <div>
                <UserInfor/>
                <br/><br/>
                <DisplayInfor name={"Hoang An"} age={22}/> 
                <hr/>
                <DisplayInfor name={"Hoang An"} age={22} myInfor={myInfor}/>
            </div>
        );
    }
}

export default MyComponent;