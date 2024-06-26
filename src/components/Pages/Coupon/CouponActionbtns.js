import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import React from "react";
import { TfiEye, TfiPencil } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";

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

function CouponActionbtns(props) {
  const [OpenView, SetOpenView] = React.useState(false);
  const [OpenEdit, SetOpenEdit] = React.useState(false);

  const handleCloseView = () => {
    SetOpenView(false);
    SetOpenEdit(false);
  };

  const handleCloseEdit = () => {
    SetOpenEdit(false);
    SetOpenView(false);
  };

  const [Type, setType] = React.useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const [Status, setStatus] = React.useState("");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <div className="OrderTableItemActionBtns">
        <div
          className="OrderTableItemActionViewBtn"
          onClick={() => {
            SetOpenView(true);
          }}
        >
          <TfiEye />
        </div>
        <div
          className="OrderTableItemActionEditBtn"
          onClick={() => {
            SetOpenEdit(true);
          }}
        >
          <TfiPencil />
        </div>
      </div>
      <Modal
        open={OpenEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="OrderModelWrapper" style={{ gap: "0.5rem" }}>
            <div className="OrderModelTop">
              <div className="Header">Quick Edit</div>
              <div className="Close" onClick={handleCloseEdit}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="EditCouponBodyWrapper">
              <div className="EditCouponBody">
                <div className="EditCouponBodyHead">Coupon Code</div>
                <input className="EditCouponBodyInput"></input>
              </div>
              <div className="EditCouponBody">
                <div className="EditCouponBodyHead">Coupon Code</div>
                <input className="EditCouponBodyInput"></input>
              </div>
              <div className="EditCouponBody">
                <div className="EditCouponBodyHead">Coupon Code</div>
                <Box sx={{ minWidth: 120 }} className="AddCouponInputElement">
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
              <div className="EditCouponBody">
                <div className="EditCouponBodyHead">Coupon Code</div>
                <Box sx={{ minWidth: 120 }} className="AddCouponInputElement">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      sx={{ height: "1.5rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Status}
                      onChange={handleChangeStatus}
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
            </div>
            <div className="CouponEditModalBtnWrapper">
              <div
                className="CouponEditModalBtn CouponEditModalBtnView"
                onClick={() => {
                  SetOpenView(true);
                }}
              >
                ViewDetails
              </div>
              <div className="CouponEditModalBtn CouponEditModalBtnUpdate">
                Update Status
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={OpenView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="CouponViewModalWrapper">
            <div className="CouponViewModalHeader">
              <div className="CouponViewModalHead">Coupon</div>
              <div className="CouponViewModalHead">
                <RiArrowRightSLine />
              </div>
              <div className="CouponViewModalHead">View Coupon</div>
            </div>
            <div className="CouponViewModalBodyWrapper">
              <div className="CouponViewModalBodyRightWrapper">
                <div
                  className="Card CouponViewCard"
                  style={{ height: "10rem" }}
                >
                  <div
                    className="middleBox"
                    style={{ height: "5rem", width: "8rem" }}
                  >
                    <div className="CardLeft">
                      <div className="CardLeftWrapper">
                        <div
                          className="CouponHeader"
                          style={{ fontSize: "0.5rem" }}
                        >
                          {props?.data?.Name}
                        </div>
                        <div
                          className="CouponDescription"
                          style={{ fontSize: "0.2rem" }}
                        >
                          {props?.data?.Details}
                        </div>
                        <div className="expDate">
                          <div
                            className="expDateHeader"
                            style={{ fontSize: "0.2rem" }}
                          >
                            Expire Date
                          </div>
                          <div
                            className="expDateData"
                            style={{ fontSize: "0.3rem" }}
                          >
                            {props?.data?.ExpireDate}
                          </div>
                        </div>
                        <a
                          href="/"
                          className="ApplyNowbtnWrapper"
                          style={{
                            height: "0.6rem",
                            width: "3rem",
                            marginTop: "1rem",
                          }}
                        >
                          <div
                            className="ApplyNowbtn"
                            style={{ fontSize: "0.4rem" }}
                          >
                            Apply Now
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="CardRight">
                      <div
                        className="CouponCuttOffData"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {props?.data?.CutOffPc}
                      </div>
                      <div
                        className="CouponCutOffWording"
                        style={{ fontSize: "0.3rem" }}
                      >
                        Off
                      </div>
                    </div>
                    <div
                      className="CouponCircle CouponLeft"
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        left: "-0.7rem",
                      }}
                    ></div>
                    <div
                      className="CouponCircle CouponRight"
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        right: "-0.7rem",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="CouponLeftStatusWrapper">
                  <div
                    className={
                      props?.data?.Status === "Ongoing"
                        ? "CouponViewStatusDot CouponViewStatusGreen"
                        : props?.data?.Status === "Expired"
                        ? "CouponViewStatusDot CouponViewStatusRed"
                        : "CouponViewStatusDot CouponViewStatusOrange"
                    }
                  ></div>
                  <div className="CouponLeftStatusWording">
                    {props?.data?.Status}
                  </div>
                </div>
              </div>
              <div className="CouponViewModalBodyLeftWrapper">
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataCode">
                  <div className="CouponViewModalBodyLeftHead">Coupon Code</div>
                  <div className="CouponViewModalBodyLeftHeadInfo">
                    {props?.data?.Code}
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataValue">
                  <div className="CouponViewModalBodyLeftHead">
                    Coupon Value
                  </div>
                  <div className="CouponViewModalBodyLeftHeadInfo ">
                    ₹ {props?.data?.Value}
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataColor">
                  <div className="CouponViewModalBodyLeftHead">Color</div>
                  <div
                    className={
                      props?.data?.Color === "Red"
                        ? "CouponViewColorDetails CouponViewColorDetailsRed"
                        : props?.data?.Color === "Blue"
                        ? "CouponViewColorDetails CouponViewColorDetailsBlue"
                        : props?.data?.Color === "Green"
                        ? "CouponViewColorDetails CouponViewColorDetailsGreen"
                        : "CouponViewColorDetails CouponViewColorDetailsOrange"
                    }
                  ></div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataCategory">
                  <div className="CouponViewModalBodyLeftHead"> Category</div>
                  <div className="CouponViewModalBodyLeftHeadInfo">
                    {props?.data?.Category}
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataSubCategory">
                  <div className="CouponViewModalBodyLeftHead">
                    Sub Category
                  </div>
                  <div className="CouponViewModalBodyLeftHeadInfo">
                    {props?.data?.SubCategory}
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataStartDate">
                  <div className="CouponViewModalBodyLeftHead">
                    Apllied Form
                  </div>
                  <div
                    className="CouponViewModalBodyLeftHeadInfo"
                    style={{ display: "flex", gap: "1.9rem" }}
                  >
                    <div>{props?.data?.StartingDate}</div>
                    <div>{props?.data?.StartingTime}</div>
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataExpire">
                  <div className="CouponViewModalBodyLeftHead">Expire Date</div>
                  <div
                    className="CouponViewModalBodyLeftHeadInfo"
                    style={{ display: "flex", gap: "1.9rem" }}
                  >
                    <div>{props?.data?.ExpireDate}</div>
                    <div>{props?.data?.ExpireTime}</div>
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataDisType">
                  <div className="CouponViewModalBodyLeftHead">
                    Discount Type
                  </div>
                  <div className="CouponViewModalBodyLeftHeadInfo">
                    {props?.data?.CutOffPc}
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataUser">
                  <div className="CouponViewModalBodyLeftHead">
                    Maximun Users
                  </div>
                  <div className="CouponViewModalBodyLeftHeadInfo">
                    {props?.data?.NoOfUser}
                  </div>
                </div>
                <div className="CouponViewModalBodyLeftData CouponViewModalBodyLeftDataStatus">
                  <div className="CouponViewModalBodyLeftHead">Status</div>
                  <div
                    className={
                      props?.data?.Status === "Ongoing"
                        ? "CouponViewModalStatusInfo CouponViewModalStatusInfoOngoing"
                        : props?.data?.Status === "Hold"
                        ? "CouponViewModalStatusInfo CouponViewModalStatusInfoHold"
                        : "CouponViewModalStatusInfo CouponViewModalStatusInfoExpire"
                    }
                  >
                    {props?.data?.Status}
                  </div>
                </div>
              </div>
            </div>
            <div className="CouponViewModalBtnWrapper">
              <div className="CouponViewModalBtn CouponViewModalBtnDelete">
                Delete Coupon
              </div>
              <div className="CouponViewModalBtn CouponViewModalBtnUpdate">
                Update Status
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CouponActionbtns;
