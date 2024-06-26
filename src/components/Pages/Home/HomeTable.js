import React from "react";
import { TableItems } from "./TableItems";
import Delete from "../DeleteIcon/Delete";
import Edit from "../EditIcon/Edit";

export const HomeTable = () => {
  return (
    <div className="HomeTableWrapper">
      <div className="HomeTableHead">
        <div className="HomeTableHeader">Order Status</div>
        <div className="HomeTableViewMore">View Details</div>
      </div>
      <div style={{ height: "7rem", width: "84vw" }}>
        <div
          style={{
            margin: " 0  0.5rem 0.5rem 0.5rem",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="Table">
            <div className="TableItems">Product </div>
            <div className="TableItems">Product Name</div>
            <div className="TableItems">Order ID</div>
            <div className="TableItems">Order Date</div>
            <div className="TableItems">Amount</div>
            <div className="TableItems">Order Status</div>
            <div className="TableItems">Action</div>
          </div>
          <div
            style={{
              height: "5.7rem",
              overflow: "scroll",
              marginTop: "0.2rem",
            }}
          >
            {TableItems.map((item) => (
              <div className="Table items" key={item?.id}>
                <div className="TableItems photo">{item?.Product}</div>
                <div className="TableItems">{item?.ProductName}</div>
                <div className="TableItems">{item?.OrderId}</div>
                <div className="TableItems">{item?.OrderDate}</div>
                <div className="TableItems">₹{item?.Amount}</div>
                <div className="TableItems">{item?.OrderStatus}</div>
                <div className="TableItems TableIconWrapper">
                  <div className="TableIcon View">
                    <Edit />
                  </div>
                  <div className="TableIcon Delete">
                    <Delete />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
