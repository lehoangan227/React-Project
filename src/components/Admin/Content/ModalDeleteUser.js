import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../service/ApiService";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalDeleteUser = (props) => {
  const {
    showModalDeleteUser,
    setShowModalDeleteUser,
    userDetail,
    fetchListUsersWithPagination,
  } = props;

  const handleClose = () => setShowModalDeleteUser(false);

  const handleDeleteUser = async () => {
    let data = await deleteUser(userDetail.id);
    if (!_.isEmpty(data) && data.EC === 0) {
      toast.success("Delete user success");
      handleClose();
      await fetchListUsersWithPagination(1);
      props.setCurrentPage(1);
    } else {
      toast.error(data.EM);
      handleClose();
    }
  };

  return (
    <>
      <Modal show={showModalDeleteUser} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Deleting Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          User <b>{userDetail.email}</b> will be removed. Are you sure ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
