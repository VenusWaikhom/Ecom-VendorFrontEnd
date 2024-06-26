import React from "react";
import { SideBar } from "../../common/SideBar/SideMenu";
import TopBar from "../../common/TopBar/TopBar";
import "./Product.css";
import { ProductBottom } from "./ProductBottom";
import { ProductMiddleItem } from "./ProductMiddleItem";

export const Product = () => {
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
      <div className="ProductMainWrapper">
        <TopBar tittle="Product" />
        <ProductMiddleItem />
        <ProductBottom />
      </div>
    </div>
  );
};
