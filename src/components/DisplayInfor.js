import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component{
    
//     render(){
//         console.log("Call me render")
//         const {listUser} = this.props;
//         // console.log(listUser);
//         return (
//             <div className="display-infor-container">
//                 {true && 
//                     <>
//                         {
//                             listUser.map((user)=>{
//                                     return (
//                                         <div key={user.id} className={parseInt(user.age) > 25 ? "red" : "green"}>
//                                             <div>
//                                                 <div>My name is {user.name}</div>
//                                                 <div>My age is {user.age}</div>
//                                             </div>
//                                             <div>
//                                                 <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
//                                             </div>
//                                             <hr/>
//                                         </div>
//                                     );
                                
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const {listUser} = props;
    
    return (
        <div className="display-infor-container">
            {true && 
                <>
                    {
                        listUser.map((user)=>{
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