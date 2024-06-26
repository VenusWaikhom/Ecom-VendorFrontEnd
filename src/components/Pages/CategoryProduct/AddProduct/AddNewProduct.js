import React from "react";
import { SideBar } from "../../../common/SideBar/SideMenu";
import TopBar from "../../../common/TopBar/TopBar";
import { FaGreaterThan } from "react-icons/fa";
import "./AddNewProduct.css";
import { Box } from "@mui/system";
import { FormControl, MenuItem, Modal, Select } from "@mui/material";
import { GrImage } from "react-icons/gr";

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

function AddProduct() {
  const [Size, setSize] = React.useState("");
  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const [openDeleteModal, setDeleteModal] = React.useState(false);

  const handleOpenDeleteModal = () => setDeleteModal(true);
  const handleClose = () => {
    setDeleteModal(false);
  };

  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="AddNewProductMainWrapper">
        <TopBar tittle="Product" />
        <div className="AddNewProductHead">
          Product
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 200,
            }}
          >
            <FaGreaterThan style={{ fontSize: "0.5rem" }} />
          </div>
          New Product
        </div>
        <div className="UploadImageWrapper">
          <div className="UploadImage">
            <div className="UploadImageIcon">
              <GrImage />
            </div>
            <div className="UploadImageText">Upload Images</div>
          </div>
          <div className="UploadImage">
            <div className="UploadImageIcon">
              <GrImage />
            </div>
            <div className="UploadImageText">Upload Images</div>
          </div>
          <div className="UploadImage">
            <div className="UploadImageIcon">
              <GrImage />
            </div>
            <div className="UploadImageText">Upload Images</div>
          </div>
          <div className="UploadImage">
            <div className="UploadImageIcon">
              <GrImage />
            </div>
            <div className="UploadImageText">Upload Images</div>
          </div>
        </div>
        <div className="AddNewProductDetails">
          <div className="AddNewProductDetail AddNewProductDetailName">
            <div className="AddNewProductDetailsHead">Name</div>
            <input className="AddNewProductDetailsInput"></input>
          </div>
          <div className="AddNewProductDetail ">
            <div className="AddNewProductDetailsHead">Price*</div>
            <input className="AddNewProductDetailsInput"></input>
          </div>
          <div className="AddNewProductDetail ">
            <div className="AddNewProductDetailsHead">Stock*</div>
            <input className="AddNewProductDetailsInput"></input>
          </div>
          <div className="AddNewProductDetail ">
            <div className="AddNewProductDetailsHead">Size*</div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  sx={{ height: "1rem", fontSize: "0.8rem" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Size}
                  onChange={handleChange}
                >
                  <MenuItem sx={{ fontSize: "0.5rem" }} value="large">
                    L
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "0.5rem" }} value="Medium">
                    M
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "0.5rem" }} value="small">
                    S
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="AddNewProductDetail ">
            <div className="AddNewProductDetailsHead">Color*</div>
            <input className="AddNewProductDetailsInput"></input>
          </div>
        </div>
        <div className="AddNewProductButtonWrapper">
          <div className="AddNewProductButton AddNEwProductProductCancleButton">
            Cancel
          </div>
          <div
            className="AddNewProductButton AddNEwProductProductSubmitButton"
            onClick={handleOpenDeleteModal}
          >
            Submit
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
                  padding: "1rem 2rem",
                  alignItems: "center",
                  color: "black",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                  height: 100,
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    onClick={handleClose}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      left: "32rem",
                    }}
                  >
                    X
                  </div>
                </div>
                <div className="DeleteItemConfirmWrapper">
                  <div className="DeleteItemConfirmHead">
                    <div className="DeleteItemConfirmHeade">
                      <div
                        className="DeleteItemConfirmHeader"
                        style={{
                          color: " #00E525",
                          fontsize: "1.8rem",
                          fontWeight: 800,
                          width: "18rem",
                          marginTop: "5rem",
                        }}
                      >
                        You have successfully added your product
                      </div>
                      <div className="DeleteItemConfirmPara">
                        You can edit this product later
                      </div>
                    </div>
                    <img
                      className="DeleteItemConfirmimage"
                      src="/images/Product/ProductAdded.png"
                      alt="Delete"
                    />
                  </div>
                  <div className="ButtonWrapper"></div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
