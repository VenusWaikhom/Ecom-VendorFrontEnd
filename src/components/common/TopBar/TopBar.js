import React, { useCallback, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { BsBell } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { Badge, Box, Modal } from "@mui/material";
// import { NotificationItem } from "./NotificationItem";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import "./TopBar.css";
import { GobalStorage } from "../../../Context/GobalStorage";
import { getMessaging, onMessage } from "firebase/messaging";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  height: "85vh",
  bgcolor: "#b6b8ba",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "0px",
  borderRadius: "20px",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function HomeTop({ tittle, secontittle, onSearch }) {
  const { state } = GobalStorage();
  const [open, setOpen] = React.useState(false);
  const [Order, SetOrder] = React.useState([]);
  const handleOpen = () => {
    fetch("http://localhost:3000/GetAllOrders")
      .then((res) => res.json())
      .then((json) => {
        console.log("OrderItems", json);
        SetOrder(json);
      });
    setOpen(true);
  };

  console.log(Order, "ORDER");

  const unreadCount = Order?.filter((item) => item.isRead === false)?.length;

  React.useEffect(() => {
    fetch("http://localhost:3000/GetAllOrders")
      .then((res) => res.json())
      .then((json) => {
        console.log("OrderItems", json);
        SetOrder(json);
      });
  }, []);

  let [searchParams, setSearchParams] = useSearchParams();

  const handleClose = () => setOpen(false);
  const location = window.location.pathname;
  console.log(location);

  onMessage(window.messaging, (payload) => {
    // alert(payload.notification.title);
    fetch("http://localhost:3000/GetAllOrders")
      .then((res) => res.json())
      .then((json) => {
        console.log("OrderItems", json);
        SetOrder(json);
      });

    // ...
  });

  return (
    <div className="TopWrapper">
      <div className={location === "/" ? "HomeTopLeft" : "TopLeft"}>
        <div className="TopLeftHeader">{tittle}</div>
        <div className="TopLeftPara">{secontittle}</div>
      </div>
      <div className={location === "/" ? "HomeTopRight TopRight" : "TopRight"}>
        <div className={location === "/" ? "" : "TopSearch"}>
          <Search sx={{ borderRadius: "40px" }}>
            <SearchIconWrapper onClick={onSearch}>
              <SearchIcon sx={{ fontSize: "1rem" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ fontSize: "0.6rem" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchParams.get("search")}
              onChange={(e) => {
                setSearchParams({ search: e.target.value });
              }}
            />
          </Search>
        </div>
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          badgeContent={unreadCount}
          max={99}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": { fontSize: 20, height: 20, minWidth: 20 },
          }}
        >
          <BsBell
            onClick={handleOpen}
            className="HomeTopRightIcon"
            color="action"
          />
        </Badge>

        <a href="/Profile">
          <RxPerson
            className={
              location === "/"
                ? "HomeTopRightIcon HomeTopRightIconWhite"
                : "HomeTopRightIcon HomeTopRightIconBlack"
            }
          />
        </a>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                height: 100,
                background:
                  "radial-gradient(74.39% 74.39% at 47.71% 50.03%,#4d50b6 3.07%,#090770 100%)",
              }}
            >
              Notification
            </div>
            <div
              style={{
                overflow: "scroll",
                height: "81%",
              }}
            >
              <div style={{}}>
                {Order.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      margin: "0.3rem",
                      height: "2.7rem",
                      display: "grid",
                      borderRadius: "20px",
                      background: "white",
                      gridTemplateColumns: "0.5fr 2fr 1fr 1fr 0.5fr",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          background: "blue",
                          height: "2rem",
                          width: "2rem",
                        }}
                      >
                        {item?.Photo}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.5rem",
                      }}
                    >
                      {item?.productname}
                    </div>
                    <div
                      style={{
                        fontSize: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        height: "50%",
                        width: "100%",
                        background: "red",
                        borderRadius: "50px",
                      }}
                    >
                      {item?.status}
                    </div>
                    <div
                      style={{
                        fontSize: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item?.Time}
                    </div>
                    <div
                      style={{
                        fontSize: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RiDeleteBin6Line
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          fetch(
                            "http://localhost:3000/DeleteOrder/" + item._id,
                            {
                              method: "DELETE",
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + state?.userToken,
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then((json) => {
                              fetch("http://localhost:3000/GetAllOrders")
                                .then((res) => res.json())
                                .then((json) => {
                                  console.log("OrderItems", json);
                                  SetOrder(json);
                                });
                            });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
