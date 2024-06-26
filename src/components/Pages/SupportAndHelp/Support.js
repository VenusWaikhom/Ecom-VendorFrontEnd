import React from "react";
import { SideBar } from "../../common/SideBar/SideMenu";
import TopBar from "../../common/TopBar/TopBar";
import { BsCardImage } from "react-icons/bs";
import "./Support.css";
import { Box, Modal } from "@mui/material";

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

function Support() {
  const [SelectChoice, SetSelectChoice] = React.useState(0);

  const [SupportSuccessfull, SetSupportSuccessfull] = React.useState(false);

  function handleCloseSupportModal() {
    SetSupportSuccessfull(false);
  }

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
        <TopBar tittle="Support" />
        <div className="SupportWrapper">
          <div className="SupportHeader">We Are Here To Help You</div>
          <div className="SupportInfoWrapperWrappers">
            <div className="SupportInfoWrapper SupportInfoWrapperName">
              <div className="SupportInfoHead">Name</div>
              <input className="SupportInfoInput"></input>
            </div>
            <div className="SupportInfoWrapper SupportInfoWrapperEmail">
              <div className="SupportInfoHead">E-mail / Phone Number</div>
              <input className="SupportInfoInput"></input>
            </div>
            <div className="SupportInfoWrapper SupportInfoWrapperChoice">
              <div className="SupportInfoHead">
                Please Select The Issue You Are Facing
              </div>
              <div className="SupportSelectChoicesWrapper">
                <div
                  className="SupportSelectChoice"
                  onClick={() => {
                    SetSelectChoice(1);
                  }}
                >
                  <div
                    className={
                      SelectChoice === 1
                        ? "SupportSelectChoiceRadio SupportSelectChoiceRadioActive"
                        : "SupportSelectChoiceRadio"
                    }
                  ></div>
                  <div className="SupportSelectChoiceWording">Order Issue</div>
                </div>
                <div
                  className="SupportSelectChoice"
                  onClick={() => {
                    SetSelectChoice(2);
                  }}
                >
                  <div
                    className={
                      SelectChoice === 2
                        ? "SupportSelectChoiceRadio SupportSelectChoiceRadioActive"
                        : "SupportSelectChoiceRadio"
                    }
                  ></div>
                  <div className="SupportSelectChoiceWording">Customer</div>
                </div>
                <div
                  className="SupportSelectChoice"
                  onClick={() => {
                    SetSelectChoice(3);
                  }}
                >
                  <div
                    className={
                      SelectChoice === 3
                        ? "SupportSelectChoiceRadio SupportSelectChoiceRadioActive"
                        : "SupportSelectChoiceRadio"
                    }
                  ></div>
                  <div className="SupportSelectChoiceWording">
                    Delivery Issue
                  </div>
                </div>
                <div
                  className="SupportSelectChoice"
                  onClick={() => {
                    SetSelectChoice(4);
                  }}
                >
                  <div
                    className={
                      SelectChoice === 4
                        ? "SupportSelectChoiceRadio SupportSelectChoiceRadioActive"
                        : "SupportSelectChoiceRadio"
                    }
                  ></div>
                  <div className="SupportSelectChoiceWording">
                    Wrong product delivery
                  </div>
                </div>
                <div
                  className="SupportSelectChoice"
                  onClick={() => {
                    SetSelectChoice(5);
                  }}
                >
                  <div
                    className={
                      SelectChoice === 5
                        ? "SupportSelectChoiceRadio SupportSelectChoiceRadioActive"
                        : "SupportSelectChoiceRadio"
                    }
                  ></div>
                  <div className="SupportSelectChoiceWording">
                    Website Issue
                  </div>
                </div>
                <div
                  className="SupportSelectChoice"
                  onClick={() => {
                    SetSelectChoice(6);
                  }}
                >
                  <div
                    className={
                      SelectChoice === 6
                        ? "SupportSelectChoiceRadio SupportSelectChoiceRadioActive"
                        : "SupportSelectChoiceRadio"
                    }
                  ></div>
                  <div className="SupportSelectChoiceWording">Other Issue</div>
                </div>
              </div>
            </div>
            <div className="SupportInfoWrapper SupportInfoWrapperImageUpload">
              <div className="SupportInfoHead">Upload Proof</div>
              <div className="SupportInfoUploadInfoLogoWrapper">
                <div className="SupportInfoUploadInfoLogo">
                  <div className="SupportInfoImgUpload">
                    <BsCardImage />
                  </div>
                  <div className="SupportInfoImgUploadWording">
                    Upload Image
                  </div>
                </div>
                <div className="SupportInfoUploadInfoLogo">
                  <div className="SupportInfoImgUpload">
                    <BsCardImage />
                  </div>
                  <div className="SupportInfoImgUploadWording">
                    Upload Image
                  </div>
                </div>
              </div>
            </div>
            <div className="SupportInfoWrapper SupportInfoWrapperMessage">
              <div className="SupportInfoHead">Message*</div>
              <input className="SupportInfoInput SupportInfoInputMessage"></input>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <div
            className="SupportSubmitBtn"
            onClick={() => {
              SetSupportSuccessfull(true);
            }}
          >
            Submit
          </div>
        </div>
      </div>
      <Modal
        open={SupportSuccessfull}
        onClose={handleCloseSupportModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
                onClick={handleCloseSupportModal}
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
                  <div style={{ fontSize: "0.5rem" }}>
                    Ticket No. 2021521512185
                  </div>
                  <div
                    className="DeleteItemConfirmHeader"
                    style={{
                      color: " #00E525",
                      fontsize: "1.8rem",
                      fontWeight: 800,
                      width: "18rem",
                    }}
                  >
                    Your Issue Has Been Sucessfully Sent To Our Team
                  </div>
                  <div
                    className="DeleteItemConfirmPara"
                    style={{ width: "15rem" }}
                  >
                    We have sent you a mail with ticket number and You will
                    recive a call from us soon
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

export default Support;
