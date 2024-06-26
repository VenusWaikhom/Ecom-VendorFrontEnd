import React from "react";
import { SideBar } from "../../common/SideBar/SideMenu";
import TopBar from "../../common/TopBar/TopBar";
import CouponList from "./CouponList";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { AiOutlineClose } from "react-icons/ai";
import "./Coupon.css";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { TbChevronRight } from "react-icons/tb";
import CouponTableBody from "./CouponTableBody";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid grey",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "12ch",
      },
    },
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
  outline: "none",
  p: 4,
};

function Coupon() {
  const [openFilter, setOpenFilter] = React.useState(false);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  const [CouponColor, SetCouponColor] = React.useState("");

  const [OpenAddCoupon, SetOpenAddCoupon] = React.useState(false);

  const [openByPrice, setOpenByPrice] = React.useState(false);
  const [openByProduct, setOpenByProduct] = React.useState(false);
  const [openByDate, setOpenByDate] = React.useState(false);
  const [openByRecent, setOpenByRecent] = React.useState(false);
  const [openByAZ, setOpenByAZ] = React.useState(false);

  const [Category, setCategory] = React.useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const [SubCategory, setSubCategory] = React.useState("");

  const handleChangeSubCategory = (event) => {
    setSubCategory(event.target.value);
  };

  const [Type, setType] = React.useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const HandleCloseAddCoupon = () => {
    SetOpenAddCoupon(false);
  };

  const handleOpenByPrice = () => {
    setOpenByPrice(true);
    setOpenByProduct(false);
    setOpenByDate(false);
    setOpenByRecent(false);
    setOpenByAZ(false);
  };
  const handleOpenByProduct = () => {
    setOpenByPrice(false);
    setOpenByProduct(true);
    setOpenByDate(false);
    setOpenByRecent(false);
    setOpenByAZ(false);
  };
  const handleOpenByDate = () => {
    setOpenByPrice(false);
    setOpenByProduct(false);
    setOpenByDate(true);
    setOpenByRecent(false);
    setOpenByAZ(false);
  };
  const handleOpenByRecent = () => {
    setOpenByPrice(false);
    setOpenByProduct(false);
    setOpenByDate(false);
    setOpenByRecent(true);
    setOpenByAZ(false);
  };
  const handleOpenByAZ = () => {
    setOpenByPrice(false);
    setOpenByProduct(false);
    setOpenByDate(false);
    setOpenByRecent(false);
    setOpenByAZ(true);
  };

  return (
    <div>
      <div
        style={{
          borderRadius: 30,
          paddingLeft: 190,
        }}
      >
        <div style={{ background: "#1e1e1e" }}>
          <SideBar />
        </div>
        <div className="ProductMainWrapper">
          <TopBar tittle="Coupon" />
          <div
            className="CouponLogosWrapper"
            style={{ margin: "0.5rem 1rem", fontSize: "0.8rem" }}
          >
            <div
              className="CouponLogosWrapperHeader"
              style={{ fontWeight: 600 }}
            >
              On Going Coupon
            </div>
            <CouponList />
          </div>
          <div className="OrderTableHeadeWrapper" style={{ margin: "0 1rem" }}>
            <div className="OrderTableHeadLeft">Coupon List</div>
            <div className="OrderTableHeadRight">
              <div>
                <Search sx={{ borderRadius: "40px" }}>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ fontSize: "1rem" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ fontSize: "0.7rem" }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                className="OrderTableDateInput"
              ></input>
              <div className="OrderTableFilter" onClick={handleOpenFilter}>
                Filter
                <div>
                  <FilterAltOutlinedIcon sx={{ fontSize: "0.7rem" }} />
                </div>
              </div>
            </div>
            <Modal
              open={openFilter}
              onClose={handleCloseFilter}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="OrderModelWrapper" style={{ gap: "0.5rem" }}>
                  <div className="OrderModelTop">
                    <div className="Header">Filter</div>
                    <div className="Close" onClick={handleCloseFilter}>
                      <AiOutlineClose />
                    </div>
                  </div>
                  <div className="FilterItemsWrapper">
                    <div
                      className="FilterItemWrapper"
                      onClick={handleOpenByPrice}
                    >
                      <div className="FilterHead">
                        <div
                          className={
                            openByPrice ? "Radio ActiveRadio" : "Radio"
                          }
                        ></div>
                        <div className="FilterHeader">By Price</div>
                      </div>
                      <div
                        className={
                          openByPrice ? " ActiveFilterOption" : "FilterOption"
                        }
                      >
                        <div className="Options">Below 500</div>
                        <div className="Options">500 - 1000</div>
                        <div className="Options">1000 - 5000</div>
                        <div className="Options">Above 5000</div>
                        <div className="OtherOption">+</div>
                      </div>
                    </div>
                    <div
                      className="FilterItemWrapper "
                      onClick={handleOpenByProduct}
                    >
                      <div className="FilterHead">
                        <div
                          className={
                            openByProduct ? "Radio ActiveRadio" : "Radio"
                          }
                        ></div>
                        <div className="FilterHeader">By Prouct</div>
                      </div>
                      <div
                        className={
                          openByProduct ? " ActiveFilterOption" : "FilterOption"
                        }
                      >
                        <div className="Options">Below 500</div>
                        <div className="Options">500 - 1000</div>
                        <div className="Options">1000 - 5000</div>
                        <div className="Options">Above 5000</div>
                        <div className="OtherOption">+</div>
                      </div>
                    </div>
                    <div
                      className="FilterItemWrapper"
                      onClick={handleOpenByDate}
                    >
                      <div className="FilterHead">
                        <div
                          className={openByDate ? "Radio ActiveRadio" : "Radio"}
                        ></div>
                        <div className="FilterHeader">By Date</div>
                      </div>
                      <div
                        className={
                          openByDate ? " ActiveFilterOption" : "FilterOption"
                        }
                      >
                        <div className="Options">Below 500</div>
                        <div className="Options">500 - 1000</div>
                        <div className="Options">1000 - 5000</div>
                        <div className="Options">Above 5000</div>
                        <div className="OtherOption">+</div>
                      </div>
                    </div>
                    <div
                      className="FilterItemWrapper"
                      onClick={handleOpenByRecent}
                    >
                      <div className="FilterHead">
                        <div
                          className={
                            openByRecent ? "Radio ActiveRadio" : "Radio"
                          }
                        ></div>
                        <div className="FilterHeader">By Recent</div>
                      </div>
                      <div
                        className={
                          openByRecent ? " ActiveFilterOption" : "FilterOption"
                        }
                      >
                        {" "}
                        <div className="Options">Below 500</div>
                        <div className="Options">500 - 1000</div>
                        <div className="Options">1000 - 5000</div>
                        <div className="Options">Above 5000</div>
                        <div className="OtherOption">+</div>
                      </div>
                    </div>
                    <div className="FilterItemWrapper" onClick={handleOpenByAZ}>
                      <div className="FilterHead">
                        <div
                          className={openByAZ ? "Radio ActiveRadio" : "Radio"}
                        ></div>
                        <div className="FilterHeader">By A-Z</div>
                      </div>
                      <div
                        className={
                          openByAZ ? " ActiveFilterOption" : "FilterOption"
                        }
                      >
                        {" "}
                        <div className="Options">Below 500</div>
                        <div className="Options">500 - 1000</div>
                        <div className="Options">1000 - 5000</div>
                        <div className="Options">Above 5000</div>
                        <div className="OtherOption">+</div>
                      </div>
                    </div>
                  </div>
                  <div className="EditOrderBtnsWrapper">
                    <div className="EditOrderViewDetails EditOrderBtn">
                      View Details
                    </div>
                    <div className="EditOrderUpdateDetails EditOrderBtn">
                      Update Details
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="CouponTableWrapper">
            <div className="CouponTableHead">
              <div className="CouponTableHeader">Coupon Code</div>
              <div className="CouponTableHeader">Value</div>
              <div className="CouponTableHeader">Start Date & Time</div>
              <div className="CouponTableHeader">End Date & Time</div>
              <div className="CouponTableHeader">No. Users</div>
              <div className="CouponTableHeader">Status</div>
              <div className="CouponTableHeader">Action</div>
            </div>
            <CouponTableBody />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: "0.2rem",
              marginRight: "2rem",
            }}
          >
            <div
              className="AddCouponBtn"
              onClick={() => {
                SetOpenAddCoupon(true);
              }}
            >
              Add Coupon
            </div>
            <Modal
              open={OpenAddCoupon}
              onClose={HandleCloseAddCoupon}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="AddCouponModalWrapper">
                  <div className="AddCouponModalHeader">
                    <div className="AddCouponModalHead">Coupon list</div>
                    <div className="AddCouponModalHead">
                      <TbChevronRight />
                    </div>
                    <div className="AddCouponModalHead">Add New Coupon</div>
                  </div>
                  <div className="AddCouponInputItems">
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">Coupon Code</div>
                      <input className="AddCouponInputElement"></input>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">Coupon Value</div>
                      <input className="AddCouponInputElement"></input>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">
                        Choose Coupon Color
                      </div>
                      <div className="AddCouponColorWrapper">
                        <div
                          className={
                            CouponColor === "Blue"
                              ? "AddCouponColor AddCouponColorBlue AddCouponColorActive"
                              : "AddCouponColor AddCouponColorBlue"
                          }
                          onClick={() => {
                            SetCouponColor("Blue");
                          }}
                        ></div>
                        <div
                          className={
                            CouponColor === "Orange"
                              ? "AddCouponColor AddCouponColorOrange AddCouponColorActive"
                              : "AddCouponColor AddCouponColorOrange"
                          }
                          onClick={() => {
                            SetCouponColor("Orange");
                          }}
                        ></div>
                        <div
                          className={
                            CouponColor === "Red"
                              ? "AddCouponColor AddCouponColorRed AddCouponColorActive"
                              : "AddCouponColor AddCouponColorRed"
                          }
                          onClick={() => {
                            SetCouponColor("Red");
                          }}
                        ></div>
                        <div
                          className={
                            CouponColor === "Green"
                              ? "AddCouponColor AddCouponColorGreen AddCouponColorActive"
                              : "AddCouponColor AddCouponColorGreen"
                          }
                          onClick={() => {
                            SetCouponColor("Green");
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">
                        Select Category
                      </div>
                      <Box
                        sx={{ minWidth: 120 }}
                        className="AddCouponInputElement"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Category}
                            onChange={handleChangeCategory}
                            sx={{ height: "1.5rem" }}
                          >
                            <MenuItem value={"10%"} sx={{ fontSize: "0.8rem" }}>
                              10%
                            </MenuItem>
                            <MenuItem value={"20%"} sx={{ fontSize: "0.8rem" }}>
                              20%
                            </MenuItem>
                            <MenuItem value={"30%"} sx={{ fontSize: "0.8rem" }}>
                              30%
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">
                        Select Sub Category
                      </div>
                      <Box
                        sx={{ minWidth: 120 }}
                        className="AddCouponInputElement"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            sx={{ height: "1.5rem" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={SubCategory}
                            onChange={handleChangeSubCategory}
                          >
                            <MenuItem value={"10%"} sx={{ fontSize: "0.8rem" }}>
                              10%
                            </MenuItem>
                            <MenuItem value={"20%"} sx={{ fontSize: "0.8rem" }}>
                              20%
                            </MenuItem>
                            <MenuItem value={"30%"} sx={{ fontSize: "0.8rem" }}>
                              30%
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">Discount Type</div>
                      <Box
                        sx={{ minWidth: 120 }}
                        className="AddCouponInputElement"
                      >
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            sx={{ height: "1.5rem" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Type}
                            onChange={handleChangeType}
                          >
                            <MenuItem value={"10%"} sx={{ fontSize: "0.8rem" }}>
                              10%
                            </MenuItem>
                            <MenuItem value={"20%"} sx={{ fontSize: "0.8rem" }}>
                              20%
                            </MenuItem>
                            <MenuItem value={"30%"} sx={{ fontSize: "0.8rem" }}>
                              30%
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">Applied From</div>
                      <input
                        type="date"
                        placeholder="DD | MM | YYYY"
                        className="AddCouponInputElement"
                      ></input>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">Expire Date</div>
                      <input
                        type="date"
                        placeholder="DD | MM | YYYY"
                        className="AddCouponInputElement"
                      ></input>
                    </div>
                    <div className="AddCouponInputWrapper">
                      <div className="AddCouponInputHeader">Maximum Users</div>
                      <input
                        className="AddCouponInputElement"
                        type="number"
                      ></input>
                    </div>
                  </div>
                  <div className="AddCouponBtnWrapper">
                    <div className="AddCouponBtn">Add Coupon</div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
