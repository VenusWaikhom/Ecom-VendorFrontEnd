import { Box, FormControl, MenuItem, Modal, Select } from "@mui/material";
import React from "react";
import { SideBar } from "../../../common/SideBar/SideMenu";
import TopBar from "../../../common/TopBar/TopBar";
import "./NewProduct.css";
import { IoIosImage } from "react-icons/io";
import { GobalStorage } from "../../../../Context/GobalStorage";
import { useRef } from "react";
import { useState } from "react";

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

function NewProduct() {
  const { state } = GobalStorage();

  console.log(state.userId);

  const [Category, setCategory] = React.useState("");
  const [SubCategory, SetSubCategory] = React.useState("");
  const [GSTType, SetGSTType] = React.useState("");
  const [openDeleteModal, setDeleteModal] = React.useState(false);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();
  const imageRef4 = useRef();

  console.log(state);
  const handleOpenDeleteModal = () => {
    setDeleteModal(true);
    const ProductName = document.getElementById("ProductNameInput").value;
    const Description = document.getElementById("DescriptionInput").value;
    const Price = document.getElementById("InputPrice").value;

    console.log(ProductName, Price, Category, SubCategory, Description);

    const FD = new FormData();
    FD.append("producename", ProductName);
    FD.append("price", Price);
    FD.append("description", Description);
    FD.append("category", Category);
    FD.append("subcategory", SubCategory);
    FD.append("image1", image1);

    // JSON.stringify({
    //   producename: ProductName,
    //   price: Price,
    //   description: Description,
    //   image1: image1,
    //   image2: image2,
    //   image3: image3,
    //   image4: image4,
    //   category: Category,
    //   subcategory: SubCategory,
    // }),

    fetch("http://localhost:3000/items", {
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
  };

  const handleClose = () => {
    setDeleteModal(false);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    SetSubCategory(event.target.value);
  };
  const handleChangeSubCategory = (event) => {
    SetSubCategory(event.target.value);
  };
  const handleChangeGSTType = (event) => {
    SetGSTType(event.target.value);
  };
  return (
    <div
      style={{
        borderRadius: 30,
        paddingLeft: 230,
      }}
    >
      <div style={{ background: "#1e1e1e" }}>
        <SideBar />
      </div>
      <div className="ProductMainWrapper">
        <TopBar tittle="Product" />
        <div className="NewProductHead">Add New Product</div>
        <div className="NewProductDetails">
          <div className="NewProductImagesWrapper">
            <div
              className="NewProductImage NewProductImage1"
              onClick={() => {
                imageRef1.current.click();
              }}
            >
              {!image1 && <IoIosImage />}
              {!image1 && <div>Upload Image</div>}
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
            <div
              className="NewProductImage"
              onClick={() => {
                imageRef2.current.click();
              }}
            >
              {!image2 && <IoIosImage />}
              {image2 && (
                <img
                  src={image2}
                  alt="image2"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <input
              type="file"
              alt=""
              style={{ display: "none" }}
              ref={imageRef2}
              accept="image/png, image/jpeg"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImage2(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div
              className="NewProductImage"
              onClick={() => {
                imageRef3.current.click();
              }}
            >
              {!image3 && <IoIosImage />}
              {image3 && (
                <img
                  src={image3}
                  alt="image3"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <input
              type="file"
              alt=""
              style={{ display: "none" }}
              ref={imageRef3}
              accept="image/png, image/jpeg"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImage3(URL.createObjectURL(e.target.files[0]));
              }}
            />

            <div
              className="NewProductImage"
              onClick={() => {
                imageRef4.current.click();
              }}
            >
              {!image4 && <IoIosImage />}
              {image4 && (
                <img
                  src={image4}
                  alt="image4"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
            <input
              type="file"
              alt=""
              style={{ display: "none" }}
              ref={imageRef4}
              accept="image/png, image/jpeg"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImage4(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
          <div
            style={{
              height: "10rem",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="NewProductInfoInputs">
              <div className="NewProductInfo NewProductName">
                <div className="NewProductInfoHead">Product Name *</div>
                <input
                  id="ProductNameInput"
                  className="NewProductInfoInput ProductNameInput"
                ></input>
              </div>
              <div className="NewProductSelectCategoryWrapper">
                <div className="NewProductInfo">
                  <div className="NewProductInfoHead ">Select Category *</div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select
                        sx={{
                          height: "1rem",
                          fontSize: "0.8rem",
                          background: "#F5F5F5",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select Category"
                        value={Category}
                        onChange={handleChangeCategory}
                      >
                        <MenuItem sx={{ fontSize: "0.5rem" }} value="Shirt">
                          Shirt
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="NewProductInfo">
                  <div className="NewProductInfoHead ">
                    Select SubCategory *
                  </div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select
                        sx={{
                          height: "1rem",
                          fontSize: "0.8rem",
                          background: "#F5F5F5",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select SubCategory"
                        value={SubCategory}
                        onChange={handleChangeSubCategory}
                      >
                        <MenuItem sx={{ fontSize: "0.5rem" }} value="Shirt">
                          Shirt
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="NewProductInfo">
                <div className="NewProductInfoHead">GST Percentage</div>
                <input className="NewProductInfoInput"></input>
              </div>
              <div className="NewProductInfo">
                <div className="NewProductInfoHead">GST Type</div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select
                      sx={{
                        height: "1rem",
                        fontSize: "0.8rem",
                        background: "#F5F5F5",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={GSTType}
                      onChange={handleChangeGSTType}
                    >
                      <MenuItem sx={{ fontSize: "0.5rem" }} value="Shirt">
                        Shirt
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="NewProductInfo">
                <div className="NewProductInfoHead">Price</div>
                <input
                  id="InputPrice"
                  className="NewProductInfoInput InputPrice"
                ></input>
              </div>
              <div className="NewProductInfo Description">
                <div className="NewProductInfoHead ">DesCription</div>
                <input
                  id="DescriptionInput"
                  className="NewProductInfoInput DescriptionInput"
                ></input>
              </div>
            </div>
            <div className="ProductButtonWrapper">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <div className="Cancel ProductBtn">Cancel</div>
                <div className="Add ProductBtn" onClick={handleOpenDeleteModal}>
                  Add Product
                </div>
              </div>
            </div>
          </div>
        </div>
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
  );
}

export default NewProduct;
