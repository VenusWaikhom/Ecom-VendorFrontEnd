import React from "react";
import { AllOrder } from "./AllProductItems";
import { RecentItems } from "./RecentItems";
import { PendingItems } from "./PendingItem";
import { CanceledItems } from "./CanceledItem";
import { DeliveredItems } from "./DeliveryItem";
import ActionBtns from "./OrderTableActionIcons/OrderTableactionBtns";

function OrderTables(props) {
  console.log(props);

  const type = props.type;
  console.log(type);

  if (type === "All Order") {
    console.log("All Order");
    return (
      <div className="TableItemsWrapper">
        {AllOrder.map((Item, Index) => {
          return (
            <div className="TableOrderItems" key={Index}>
              <div className="TableOrderItem">{Item?.ProductId}</div>
              <div className="TableOrderItem">{Item?.ProductName}</div>
              <div className="TableOrderItem ">
                <div className="Quantity">{Item?.Qty}</div>
              </div>
              <div className="TableOrderItem">₹{Item?.GST}</div>
              <div className="TableOrderItem">₹{Item?.Total}</div>
              <div className="TableOrderItem">
                <div
                  className={
                    Item?.Status === "Pending"
                      ? "Pending Status"
                      : Item?.Status === "Cancled"
                      ? "Cancled Status"
                      : Item?.Status === "Dispatch"
                      ? "Dispatch Status"
                      : "Delivered Status"
                  }
                >
                  {Item?.Status}
                </div>
              </div>
              <ActionBtns item={Item} />
            </div>
          );
        })}
      </div>
    );
  } else if (type === "Recent") {
    console.log("Recent");
    return (
      <div className="TableItemsWrapper">
        {RecentItems.map((Item, Index) => {
          return (
            <div className="TableOrderItems" key={Index}>
              <div className="TableOrderItem">{Item?.ProductId}</div>
              <div className="TableOrderItem">{Item?.ProductName}</div>
              <div className="TableOrderItem ">
                <div className="Quantity">{Item?.Qty}</div>
              </div>
              <div className="TableOrderItem">₹{Item?.GST}</div>
              <div className="TableOrderItem">₹{Item?.Total}</div>
              <div className="TableOrderItem">
                <div
                  className={
                    Item?.Status === "Pending"
                      ? "Pending Status"
                      : Item?.Status === "Cancled"
                      ? "Cancled Status"
                      : Item?.Status === "Dispatch"
                      ? "Dispatch Status"
                      : "Delivered Status"
                  }
                >
                  {Item?.Status}
                </div>
              </div>
              <ActionBtns item={Item} />
            </div>
          );
        })}
      </div>
    );
  } else if (type === "Pending") {
    console.log("Pending");
    return (
      <div className="TableItemsWrapper">
        {PendingItems.map((Item, Index) => {
          return (
            <div className="TableOrderItems" key={Index}>
              <div className="TableOrderItem">{Item?.ProductId}</div>
              <div className="TableOrderItem">{Item?.ProductName}</div>
              <div className="TableOrderItem">
                <div className="Quantity">{Item?.Qty}</div>
              </div>
              <div className="TableOrderItem">₹{Item?.GST}</div>
              <div className="TableOrderItem">₹{Item?.Total}</div>
              <div className="TableOrderItem">
                <div
                  className={
                    Item?.Status === "Pending"
                      ? "Pending Status"
                      : Item?.Status === "Cancled"
                      ? "Cancled Status"
                      : Item?.Status === "Dispatch"
                      ? "Dispatch Status"
                      : "Delivered Status"
                  }
                >
                  {Item?.Status}
                </div>
              </div>
              <ActionBtns item={Item} />
            </div>
          );
        })}
      </div>
    );
  } else if (type === "Canceled") {
    console.log("Canceled");
    return (
      <div className="TableItemsWrapper">
        {CanceledItems.map((Item, Index) => {
          return (
            <div className="TableOrderItems" key={Index}>
              <div className="TableOrderItem">{Item?.ProductId}</div>
              <div className="TableOrderItem">{Item?.ProductName}</div>
              <div className="TableOrderItem ">
                <div className="Quantity">{Item?.Qty}</div>
              </div>
              <div className="TableOrderItem">₹{Item?.GST}</div>
              <div className="TableOrderItem">₹{Item?.Total}</div>
              <div className="TableOrderItem">
                <div
                  className={
                    Item?.Status === "Pending"
                      ? "Pending Status"
                      : Item?.Status === "Cancled"
                      ? "Cancled Status"
                      : Item?.Status === "Dispatch"
                      ? "Dispatch Status"
                      : "Delivered Status"
                  }
                >
                  {Item?.Status}
                </div>
              </div>
              <ActionBtns item={Item} />
            </div>
          );
        })}
      </div>
    );
  } else if (type === "Delivery") {
    console.log("Delivery");
    return (
      <div className="TableItemsWrapper">
        {DeliveredItems.map((Item, Index) => {
          return (
            <div className="TableOrderItems" key={Index}>
              <div className="TableOrderItem">{Item?.ProductId}</div>
              <div className="TableOrderItem">{Item?.ProductName}</div>
              <div className="TableOrderItem ">
                <div className=" Quantity">{Item?.Qty}</div>
              </div>
              <div className="TableOrderItem">₹{Item?.GST}</div>
              <div className="TableOrderItem">₹{Item?.Total}</div>
              <div className="TableOrderItem">
                <div
                  className={
                    Item?.Status === "Pending"
                      ? "Pending Status"
                      : Item?.Status === "Cancled"
                      ? "Cancled Status"
                      : Item?.Status === "Dispatch"
                      ? "Dispatch Status"
                      : "Delivered Status"
                  }
                >
                  {Item?.Status}
                </div>
              </div>
              <ActionBtns item={Item} />
            </div>
          );
        })}
      </div>
    );
  } else {
    console.log("Error");
  }
}

export default OrderTables;
