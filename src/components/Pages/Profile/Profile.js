import React, { useEffect } from "react";
import { SideBar } from "../../common/SideBar/SideMenu";
import TopBar from "../../common/TopBar/TopBar";
import { ProfileData } from "./ProfileData";
import "./Profile.css";
import { GobalStorage } from "../../../Context/GobalStorage";
import { Box, Modal } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

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

function Profile() {
  const [openEditProfile, setopenEditProfile] = React.useState(false);
  const handleOpenEditProfile = () => setopenEditProfile(true);
  const handleCloseEditProfile = () => setopenEditProfile(false);

  const { state } = GobalStorage();
  console.log(state?.userId, "userId");

  useEffect(() => {
    fetch("http://localhost:3000/user/" + state?.userId, {
      method: "get",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  });

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
      <div className="ProfileWrapper">
        <TopBar tittle="Profile" />
        <div className="ProfileMainWrapper">
          <div className="ProfileHead">
            <div className="ProfileHeader">My Account</div>
            <div className="ProfileHeadBtnWrapper">
              <div className="ProfileHeadBtn ProfileCostomeViewBtn">
                Coustomer Views
              </div>
              <div
                className="ProfileHeadBtn ProfileEditBtn"
                onClick={handleOpenEditProfile}
              >
                Edit Profile
              </div>
            </div>
          </div>
          <div className="ProfileInfoWrapper">
            <div className="ProfilePersonalDetailHeader">Personal Details</div>
            {ProfileData.map((item, index) => {
              return (
                <div className="ProfilePresonalDetailsWrapper" key={index}>
                  <div className="ProfilePersonalDetailsInfoItems">
                    <div className="ProfilePersonalDetailsInfoHeader">Name</div>
                    <div className="ProfilePersonalDetailsInfo">
                      {item?.Name}
                    </div>
                  </div>
                  <div className="ProfilePersonalDetailsInfoItems">
                    <div className="ProfilePersonalDetailsInfoHeader">
                      E-Mail
                    </div>
                    <div className="ProfilePersonalDetailsInfo">
                      {item?.EMail}
                    </div>
                  </div>
                  <div className="ProfilePersonalDetailsInfoItems">
                    <div className="ProfilePersonalDetailsInfoHeader">
                      Phone No.
                    </div>
                    <div className="ProfilePersonalDetailsInfo">
                      {item?.PhoneNo}
                    </div>
                  </div>
                  <div className="ProfilePersonalDetailsInfoItems ProfilePersonalDetailsInfoItemsAddress">
                    <div className="ProfilePersonalDetailsInfoHeader">
                      Address
                    </div>
                    <div className="ProfilePersonalDetailsInfo ProfilePersonalDetailsInfoAddress ">
                      {item?.Address}
                    </div>
                  </div>
                  <div className="ProfilePersonalDetailsInfoItems">
                    <div className="ProfilePersonalDetailsInfoHeader">City</div>
                    <div className="ProfilePersonalDetailsInfo">
                      {item?.City}
                    </div>
                  </div>
                  <div className="ProfilePersonalDetailsInfoItems">
                    <div className="ProfilePersonalDetailsInfoHeader">
                      State
                    </div>
                    <div className="ProfilePersonalDetailsInfo">
                      {item?.State}
                    </div>
                  </div>
                  <div className="ProfilePersonalDetailsInfoItems">
                    <div className="ProfilePersonalDetailsInfoHeader">
                      PinCode
                    </div>
                    <div className="ProfilePersonalDetailsInfo">
                      {item?.PinCode}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        open={openEditProfile}
        onClose={handleCloseEditProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="OrderModelWrapper"
            style={{ margin: "0.5rem", gap: "0.5rem" }}
          >
            <div className="OrderModelTop">
              <div className="Header" style={{ fontSize: "0.9rem" }}>
                Edit Profile
              </div>
              <div className="Close" onClick={handleCloseEditProfile}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="EditProfileModel">
              <div className="EditProfileData">
                <div className="EditProfileheader">Name</div>
                <div className="EditProfileDataInput"></div>
              </div>
              <div className="EditProfileData">
                <div className="EditProfileheader">Email</div>
                <div className="EditProfileDataInput"></div>
              </div>
              <div className="EditProfileData">
                <div className="EditProfileheader">Phone no.</div>
                <div className="EditProfileDataInput"></div>
              </div>
              <div className="EditProfileData EditProfileDataAddress">
                <div className="EditProfileheader">Address</div>
                <div className="EditProfileDataInput"></div>
              </div>
              <div className="EditProfileData">
                <div className="EditProfileheader">City</div>
                <div className="EditProfileDataInput"></div>
              </div>
              <div className="EditProfileData">
                <div className="EditProfileheader">State</div>
                <div className="EditProfileDataInput"></div>
              </div>
              <div className="EditProfileData">
                <div className="EditProfileheader">Pin Code</div>
                <div className="EditProfileDataInput"></div>
              </div>
            </div>
            <div className="EditProfileButtonsWrapper">
              <div
                className="EditProfileButtons EditProfileButtonsCancle"
                onClick={handleCloseEditProfile}
              >
                Cancel
              </div>
              <div className=" EditProfileButtons EditProfileButtonsSubmit">
                Submit
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Profile;
