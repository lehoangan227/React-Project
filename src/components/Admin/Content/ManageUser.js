import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../service/ApiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import { set } from "lodash";
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [userIdView, setUserIdView] = useState("");
  const [userDetail, setUserDetail] = useState({});
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnView = (userId) => {
    if (listUser && listUser.length > 0 && userId) {
      setUserDetail(listUser.find((item) => item.id === userId));
    }
    setShowModalViewUser(true);
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModalCreateUser(true)}
          >
            Add New User
          </button>
        </div>
        <div className="table-user-container">
          <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
          />
        </div>
      </div>
      <ModalCreateUser
        showModalCreateUser={showModalCreateUser}
        setShowModalCreateUser={setShowModalCreateUser}
        fetchListUsers={fetchListUsers}
      />
      <ModalUpdateUser
        showModalUpdateUser={showModalUpdateUser}
        setShowModalUpdateUser={setShowModalUpdateUser}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        fetchListUsers={fetchListUsers}
      />
      <ModalViewUser
        showModalViewUser={showModalViewUser}
        setShowModalViewUser={setShowModalViewUser}
        userDetail={userDetail}
      />
    </div>
  );
};

export default ManageUser;
