import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import "./SideBar.css";
import { MenuTopList } from "./MenuTopList";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { MenuBottomList } from "./MenuBottomList";
import { useNavigate } from "react-router-dom";
import { GobalStorage } from "../../../Context/GobalStorage";

const drawerWidth = 180;

export const SideBar = () => {
  const { dispatch } = GobalStorage();

  const navigate = useNavigate();

  const url = window.location.pathname;
  console.log("Pathname: ", window.location.pathname);
  console.log("href :", window.location.href);

  return (
    <div style={{ background: "black" }}>
      <Drawer
        style={{ background: "black" }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
          background: "black",
        }}
        variant="permanent"
        anchor="left"
      >
        <List className="ListItems">
          <a href="/" className="logoContainer">
            <img src="/images/New Logo.png" alt="Logo" className="logo" />
          </a>
        </List>
        <List className="ListItems">
          <div className="ellipse">
            <div className="ellipse1 ellipses"></div>
            <div className="ellipse2 ellipses"></div>
            <div className="ellipse3 ellipses"></div>
            <div className="ellipse4 ellipses"></div>
          </div>
        </List>
        <List
          className="ListItems"
          sx={{ display: "flex", flexDirection: "column", fontSize: "0.99rem" }}
        >
          {MenuTopList.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.links);
                }}
                sx={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "grey",
                    width: "90px",
                    padding: "8.7px",
                    borderBottom: "2px solid #1e1e1e",
                  }}
                  className={
                    url === item.links
                      ? "Itemhover ItemhoverActive "
                      : "Itemhover"
                  }
                >
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ height: "20px", background: "#1e1e1e" }} />
        <List className="ListItems">
          {MenuBottomList.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  dispatch({ type: "logout" });
                  localStorage.removeItem("userToken");
                  window.location.reload();
                }}
                sx={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItemIcon sx={{ color: "red", fontSize: "30px" }}>
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
