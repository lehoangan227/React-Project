import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


const DisplayInfor = (props) => {
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUer = ()=>{
        setShowHideListUser(!isShowHideListUser);
    }

    console.log("call me render");
    useEffect(
        ()=>{
        if(props.listUser.length===0){
            alert("done!");
        }
        console.log("me");
    },[props.listUser]);
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={()=>handleShowHideListUer()}>
                    {isShowHideListUser ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser && 
                <>
                    {
                        props.listUser.map((user)=>{
                            return (
                                <div key={user.id} className={parseInt(user.age) > 25 ? "red" : "green"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={()=>props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr/>
                                </div>
                            );
                        })
                    }
                </>
            }
        </div>
    );
}
export default DisplayInfor;