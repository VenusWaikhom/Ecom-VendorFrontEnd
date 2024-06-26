import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { MdOutlineDelete } from "react-icons/md";
import { GobalStorage } from "../../../Context/GobalStorage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  padding: "0px",
  borderRadius: "20px",
};

function Delete({ id, deleteFinishCallback }) {
  const { state } = GobalStorage();

  const [openDeleteModal, setDeleteModal] = React.useState(false);

  const handleOpenDeleteModal = () => {
    setDeleteModal(true);
  };
  const handleClose = () => {
    setDeleteModal(false);
  };

  const ConfirmDelete = () => {
    setDeleteModal(false);
    fetch("http://localhost:3000/items/" + id, {
      headers: {
        Authorization: "Bearer " + state.userToken,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        deleteFinishCallback();
      });
  };

  return (
    <div>
      <div
        className="TableIcon ProductTableIcon"
        style={{ cursor: "pointer" }}
        onClick={handleOpenDeleteModal}
      >
        <MdOutlineDelete />
      </div>
      <Modal
        keepMounted
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              alignItems: "center",
              color: "black",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              height: 0,
            }}
          >
            <div className="DeleteItemConfirmWrapper">
              <div className="DeleteItemConfirmHead">
                <div className="DeleteItemConfirmHeade">
                  <div className="DeleteItemConfirmHeader">
                    Do You Want To Delete The Product?
                  </div>
                  <div className="DeleteItemConfirmPara">
                    Once deleted , you will not able to recover it
                  </div>
                </div>
                <img
                  className="DeleteItemConfirmimage"
                  src="/images/Product/DeleteCompleted.png"
                  alt="Delete"
                />
              </div>
              <div className="ButtonWrapper">
                <div
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <Button
                    sx={{ color: "white" }}
                    onClick={handleClose}
                    className="deleteConfirmbutton"
                  >
                    Cancel
                  </Button>
                </div>
                <div
                  style={{
                    borderRadius: "15px",
                    backgroundColor: " #E63C3C",
                    color: "white",
                  }}
                >
                  <Button
                    sx={{ color: "white", gap: "0.2rem" }}
                    onClick={ConfirmDelete}
                    className="deleteConfirmbutton"
                  >
                    <DeleteOutlinedIcon sx={{ fontSize: "1rem" }} />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Delete;
