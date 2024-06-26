import React from "react";
import { CouponData } from "./CouponData";
import CouponActionbtns from "./CouponActionbtns";

function CouponTableBody() {
  return (
    <div className="CouponTableBodyWrapper">
      {CouponData.map((item, index) => {
        return (
          <div className="CouponTableBodyDataWrapper" key={index}>
            <div className="CouponTableBodyData">{item?.Code}</div>
            <div className="CouponTableBodyData">₹{item?.Value}</div>
            <div className="CouponTableBodyData">
              {item?.StartingDate};{item?.StartingTime}
            </div>
            <div className="CouponTableBodyData">
              {item?.ExpireDate};{item?.ExpireTime}
            </div>
            <div className="CouponTableBodyData CouponTableBodyDataNoUser">
              {item?.NoOfUser}
            </div>
            <div
              className={
                item?.Status === "Ongoing"
                  ? "CouponTableBodyDataStatus CouponTableBodyDataStatusOngoing"
                  : item?.Status === "Expired"
                  ? "CouponTableBodyDataStatus CouponTableBodyDataStatusExpired"
                  : "CouponTableBodyDataStatus CouponTableBodyDataStatusHold"
              }
            >
              {item?.Status}
            </div>
            <CouponActionbtns data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default CouponTableBody;
