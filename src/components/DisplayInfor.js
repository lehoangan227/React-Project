import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component{
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser : !this.state.isShowListUser
        })
    }
    render(){
        const {listUser} = this.props;
        // console.log(listUser);
        return (
            <div className="display-infor-container">
                <img src={logo}/>
                <div>
                    <span onClick={()=>{
                        this.handleShowHide()
                    }}>
                    {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser && 
                    <>
                        {
                            listUser.map((user)=>{
                                    return (
                                        <div key={user.id} className={parseInt(user.age) > 25 ? "red" : "green"}>
                                            <div>My name is {user.name}</div>
                                            <div>My age is {user.age}</div>
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
}
export default DisplayInfor;