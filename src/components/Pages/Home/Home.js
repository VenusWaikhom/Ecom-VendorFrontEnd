import React from "react";
import { SideBar } from "../../common/SideBar/SideMenu";
import { HomeMiddle } from "./HomeMiddle";
import { HomeTable } from "./HomeTable";
import TopBar from "../../common/TopBar/TopBar";
import "./Home.css";

export const Home = () => {
  return (
    <div
      style={{
        borderRadius: 30,
        paddingLeft: 190,
      }}
    >
      <div style={{ background: "#1e1e1e" }}>
        <SideBar />
      </div>
      <div className="HomeMainWrapper">
        <div style={{ color: "white" }}>
          <TopBar tittle="Hey, User" secontittle="Good Morning" />
        </div>
        <HomeMiddle />
        <HomeTable />
      </div>
    </div>
  );
};
