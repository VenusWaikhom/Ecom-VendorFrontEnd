import React, { useState } from "react";
import { SideBar } from "../../common/SideBar/SideMenu";
import TopBar from "../../common/TopBar/TopBar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import "./Payment.css";
import PaymentTableBody from "./PaymentTable";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Modal } from "@mui/material";

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

function Payment() {
  const [PaymentStatus, SetPaymentStatus] = useState("All Payment");
  // const [Status, setStatus] = useState();

  const [openByPrice, setOpenByPrice] = React.useState(false);
  const [openByProduct, setOpenByProduct] = React.useState(false);
  const [openByDate, setOpenByDate] = React.useState(false);
  const [openByRecent, setOpenByRecent] = React.useState(false);
  const [openByAZ, setOpenByAZ] = React.useState(false);

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

  const [openFilter, setOpenFilter] = React.useState(false);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  // if (Status === "Other") {
  //   document.getElementById("PaymentTableStatusHeader").innerHTML = "Status";
  // } else {
  //   document.getElementById("PaymentTableStatusHeader").innerHTML = "GST";
  // }

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
          <TopBar tittle="Payment" />
          <div className="PaymentTypeAndTableWrapper">
            <div className="OrderTableHeadeWrapper">
              <div className="PaymentMainHeader">Payment</div>
              <div className="OrderTableHeadRight" style={{ gap: "0.5rem" }}>
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
                <Modal
                  open={openFilter}
                  onClose={handleCloseFilter}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div
                      className="OrderModelWrapper"
                      style={{ gap: "0.5rem" }}
                    >
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
                              openByPrice
                                ? " ActiveFilterOption"
                                : "FilterOption"
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
                              openByProduct
                                ? " ActiveFilterOption"
                                : "FilterOption"
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
                              className={
                                openByDate ? "Radio ActiveRadio" : "Radio"
                              }
                            ></div>
                            <div className="FilterHeader">By Date</div>
                          </div>
                          <div
                            className={
                              openByDate
                                ? " ActiveFilterOption"
                                : "FilterOption"
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
                              openByRecent
                                ? " ActiveFilterOption"
                                : "FilterOption"
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
                        <div
                          className="FilterItemWrapper"
                          onClick={handleOpenByAZ}
                        >
                          <div className="FilterHead">
                            <div
                              className={
                                openByAZ ? "Radio ActiveRadio" : "Radio"
                              }
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
            </div>
          </div>
          <div className="PaymentStatusWrapper">
            <div
              className={
                PaymentStatus === "All Payment"
                  ? "PaymentStatus ActivePaymentStatus"
                  : "PaymentStatus"
              }
              onClick={() => {
                SetPaymentStatus("All Payment");
                // setStatus();
              }}
            >
              All Payment
            </div>
            <div
              className={
                PaymentStatus === "Recived"
                  ? "PaymentStatus ActivePaymentStatus"
                  : "PaymentStatus"
              }
              onClick={() => {
                SetPaymentStatus("Recived");
                // setStatus("Other");
              }}
            >
              Recived
            </div>
            <div
              className={
                PaymentStatus === "Sent"
                  ? "PaymentStatus ActivePaymentStatus"
                  : "PaymentStatus"
              }
              onClick={() => {
                SetPaymentStatus("Sent");
                // setStatus("Other");
              }}
            >
              Sent
            </div>
          </div>
          <div className="PaymentTableWrapper">
            <div className="PaymentTableHead">
              <div className="PaymenttableHeader">Transaction ID</div>
              <div className="PaymenttableHeader">Name</div>
              <div className="PaymenttableHeader">Date</div>
              <div
                id="PaymentTableStatusHeader"
                className="PaymenttableHeader"
              ></div>
              <div className="PaymenttableHeader">Total</div>
              <div className="PaymenttableHeader">Action</div>
            </div>
            <PaymentTableBody Status={PaymentStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
