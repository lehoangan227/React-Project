import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalViewUser = (props) => {
  const { showModalViewUser, setShowModalViewUser, userDetail } = props;

  const handleClose = () => {
    setShowModalViewUser(false);
  };

  return (
    <>
      <Modal
        show={showModalViewUser}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>View User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={userDetail.email}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={userDetail.password}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={userDetail.username}
                disabled
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select" value={userDetail.role} disabled>
                <option selected value="USER">
                  USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div className="col-md-12 img-preview">
              {userDetail.image ? (
                <img src={`data:image/jpeg;base64,${userDetail.image}`} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalViewUser;
