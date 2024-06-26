import React from "react";
import { CouponData } from "./CouponData";

function CouponList() {
  return (
    <div className="Coupons">
      {CouponData.map((Item, index) => {
        return (
          <div className="Card" key={index}>
            <div className="middleBox">
              <div className="CardLeft">
                <div className="CardLeftWrapper">
                  <div className="CouponHeader">{Item?.Name}</div>
                  <div className="CouponDescription">{Item.Details}</div>
                  <div className="expDate">
                    <div className="expDateHeader">Expire Date</div>
                    <div className="expDateData">{Item.ExpireDate}</div>
                  </div>
                  <a href="/" className="ApplyNowbtnWrapper">
                    <div className="ApplyNowbtn">Apply Now</div>
                  </a>
                </div>
              </div>
              <div className="CardRight">
                <div className="CouponCuttOffData">{Item.CutOffPc}</div>
                <div className="CouponCutOffWording">Off</div>
              </div>
              <div className="CouponCircle CouponLeft"></div>
              <div className="CouponCircle CouponRight"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CouponList;
