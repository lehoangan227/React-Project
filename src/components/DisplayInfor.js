import React from "react";

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
            <div>
                <div>
                    <span onClick={()=>{
                        this.handleShowHide()
                    }}>
                    {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser && 
                    <div>
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
                    </div>
                }
            </div>
        );
    }
}
export default DisplayInfor;