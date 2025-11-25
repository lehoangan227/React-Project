import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../service/ApiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
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

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setUserDetail(user);
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
            handleClickBtnDelete={handleClickBtnDelete}
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
      <ModalDeleteUser
        showModalDeleteUser={showModalDeleteUser}
        setShowModalDeleteUser={setShowModalDeleteUser}
        userDetail={userDetail}
        fetchListUsers={fetchListUsers}
      />
    </div>
  );
};

export default ManageUser;
