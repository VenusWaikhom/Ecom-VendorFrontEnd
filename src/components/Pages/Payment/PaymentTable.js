import React from "react";
import { AllPaymentData } from "./AllPaymentData";
import { RecivedData } from "./RecivedData";
import { SentData } from "./SentData";
import PaymentActionBtn from "./PaymentActionBtn";

function PaymentTableBody(props) {
  console.log(props);

  const Status = props.Status;
  console.log(Status);

  if (Status === "All Payment") {
    console.log("All Payment");
    return (
      <div className="PaymentTableBodyWrapper">
        {AllPaymentData.map((Item, index) => {
          return (
            <div className="PaymentTableBody" key={index}>
              <div className="PaymentTableInfo">{Item?.TransactionId}</div>
              <div className="PaymentTableInfo">{Item?.Name}</div>
              <div className="PaymentTableInfo">{Item?.Date}</div>
              <div className="PaymentTableInfo">₹{Item?.GST}</div>
              <div className="PaymentTableInfo">₹{Item?.Total}</div>
              <PaymentActionBtn data={Item} />
            </div>
          );
        })}
      </div>
    );
  } else if (Status === "Recived") {
    console.log("Payment Recived");
    return (
      <div className="PaymentTableBodyWrapper">
        {RecivedData.map((Item, index) => {
          return (
            <div className="PaymentTableBody" key={index}>
              <div className="PaymentTableInfo">{Item?.TransactionId}</div>
              <div className="PaymentTableInfo">{Item?.Name}</div>
              <div className="PaymentTableInfo">{Item?.Date}</div>
              <div className="PaymentTableInfo RecivedActive">
                {Item?.Status}
              </div>
              <div className="PaymentTableInfo">₹{Item?.Total}</div>
              <PaymentActionBtn data={Item} />
            </div>
          );
        })}
      </div>
    );
  } else if (Status === "Sent") {
    console.log("Payment Sent");
    return (
      <div className="PaymentTableBodyWrapper">
        {SentData.map((Item, index) => {
          return (
            <div className="PaymentTableBody" key={index}>
              <div className="PaymentTableInfo">{Item?.TransactionId}</div>
              <div className="PaymentTableInfo">{Item?.Name}</div>
              <div className="PaymentTableInfo">{Item?.Date}</div>
              <div
                className={
                  Item.Status === "Ongoing"
                    ? "OngoingActive PaymentTableInfo"
                    : "SentActive PaymentTableInfo"
                }
              >
                {Item?.Status}
              </div>
              <div className="PaymentTableInfo">₹{Item?.Total}</div>
              <PaymentActionBtn data={Item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PaymentTableBody;
