import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
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

const Edit = ({ data, EditFinishCallback }) => {
  const { state } = GobalStorage();

  const [image1, setImage1] = useState("");

  const imageRef1 = useRef();

  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleClose = () => {
    setOpenEditModal(false);
    const ProductName = document.getElementById("ProductNameInput").value;
    const Price = document.getElementById("InputPrice").value;

    const FD = new FormData();
    FD.append("id", data?._id);
    FD.append("producename", ProductName);
    FD.append("price", Price || data?.price);
    FD.append("image1", image1 || data?.image1);

    fetch("http://localhost:3000/updateItem", {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + state.userToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: FD,
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    EditFinishCallback();
  };
  return (
    <div>
      <div
        className="TableIcon ProductTableIcon"
        style={{ cursor: "pointer" }}
        onClick={handleOpenEditModal}
      >
        <MdOutlineEdit />
      </div>
      <Modal
        keepMounted
        open={openEditModal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.5rem 2rem",
              alignItems: "center",
              color: "black",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <div style={{ fontWeight: "600" }}>Quick Edit</div>
            <div onClick={handleClose} style={{ cursor: "pointer" }}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="EditMain">
            <div className="EditImageWrapper">
              <div className="Image">
                <div
                  className="NewProductImage NewProductImage1"
                  style={{ height: "100%", width: "100%" }}
                  onClick={() => {
                    imageRef1.current.click();
                  }}
                >
                  {data?.image1 && (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={"http://localhost:3000" + data?.image1}
                      alt="pimage"
                    />
                  )}
                  {image1 && (
                    <img
                      src={URL.createObjectURL(image1)}
                      alt="image1"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </div>
                <input
                  type="file"
                  alt=""
                  style={{ display: "none" }}
                  ref={imageRef1}
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    setImage1(e.target.files[0]);
                  }}
                />
              </div>
              <div
                className="UploadImages"
                onClick={() => {
                  imageRef1.current.click();
                }}
                style={{ cursor: "pointer" }}
              >
                Upload Picture
              </div>
            </div>
            <div className="EditInfo">
              <div className="EditInfoItem EditInfoNameItem">
                <div className="EditInfoHEad">Name</div>
                <input
                  className="EditInfoHeadInput"
                  id="ProductNameInput"
                  type="text"
                  defaultValue={data?.producename}
                ></input>
              </div>
              <div className="EditInfoItem">
                <div className="EditInfoHEad">Price</div>
                <input className="EditInfoHeadInput" id="InputPrice"></input>
              </div>
              <div className="EditInfoItem">
                <div className="EditInfoHEad">Select Size</div>
                <input className="EditInfoHeadInput" id="selectSize"></input>
              </div>
              <div className="EditInfoItem">
                <div className="EditInfoHEad">Stock</div>
                <input className="EditInfoHeadInput" id="Stock"></input>
              </div>
              <div className="EditInfoItem">
                <div className="EditInfoHEad">Color</div>
                <div className="QuickEditColorPicker">
                  <div className="colorDemo"></div>
                  <div className="ColorText" id="color">
                    #000000
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="UpdateDetailsButtonWrapper">
            <div></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "0.5rem",
              }}
            >
              <div
                className="UpdateDetailsButton"
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              >
                Update
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Edit;
