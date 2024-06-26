import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TfiEye, TfiPencil } from "react-icons/tfi";
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

function ActionBtns(props) {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  console.log(props);
  return (
    <div>
      <div className="OrderTableItemActionBtns">
        <div className="OrderTableItemActionViewBtn" onClick={handleOpenView}>
          <TfiEye />
        </div>
        <div className="OrderTableItemActionEditBtn" onClick={handleOpenEdit}>
          <TfiPencil />
        </div>
      </div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="OrderModelWrapper">
            <div className="OrderModelTop">
              <div className="Header">Quick Edit</div>
              <div className="Close" onClick={handleCloseEdit}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="OrderModelMiddle">
              <div className="OrderEditImageWrapper"></div>
              <div className="RightItemDetails">
                <div className="EditOrderId EditOrderInfo">
                  <div className="EditOrderHead">Order ID</div>
                  <div className="EditOrderIn">{props.item?.ProductId}</div>
                </div>
                <div className="EditOrderData EditOrderInfo">
                  <div className="EditOrderHead">Order Date</div>
                  <div className="EditOrderIn">{props.item?.OrderDate}</div>
                </div>
                <div className="EditOrderName EditOrderInfo">
                  <div className="EditOrderHead">Prodict Name</div>
                  <div className="EditOrderIn">{props.item?.ProductName}</div>
                </div>
                <div className="EditOrderColor EditOrderInfo">
                  <div className="EditOrderHead">Color</div>
                  <div className="EditOrderIn">
                    <div className="OrderSampleColor"></div>#{props.item?.Color}
                  </div>
                </div>
                <div className="EditOrderStatus EditOrderInfo">
                  <div className="EditOrderHead">Status</div>
                  <div className="EditOrderIn">{props.item?.Status}</div>
                </div>
                <div className="EditOrderCustomerName EditOrderInfo">
                  <div className="EditOrderHead EditOrderCustomerNameHead">
                    Customer Name
                  </div>
                  <div className="EditOrderIn">{props.item?.CustomerName}</div>
                </div>
                <div className="EditOrderPrice EditOrderInfo">
                  <div className="EditOrderHead">Price</div>
                  <div className="EditOrderIn">₹{props.item?.Price}</div>
                </div>
                <div className="EditOrderGST EditOrderInfo">
                  <div className="EditOrderHead">GST</div>
                  <div className="EditOrderIn">₹{props.item?.GST}</div>
                </div>
                <div className="EditOrderTotal EditOrderInfo">
                  <div className="EditOrderHead">Total</div>
                  <div className="EditOrderIn">₹{props.item?.Total}</div>
                </div>
              </div>
            </div>
            <div className="EditOrderBtnsWrapper">
              <div
                className="EditOrderViewDetails EditOrderBtn"
                onClick={handleOpenView}
              >
                View Details
              </div>
              <div className="EditOrderUpdateDetails EditOrderBtn">
                Update Details
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {" "}
          <div className="OrderModelWrapper">
            <div className="OrderModelTop">
              <div className="Header">View Order</div>
              <div className="Close" onClick={handleCloseView}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="OrderModelMiddle">
              <div className="OrderViewLeftWrapper">
                <div className="OrderViewImageWrapper"></div>
                <div className="OrderViewLeftStatus">
                  <div className="OrderViewInfoStatusColor"></div>
                  {props.item?.Status}
                </div>
              </div>
              <div className="OrderViewRightItem">
                <div className="OrderViewInfo">
                  <div className="OrderViewInfoHead">Product</div>
                  <div className="OrderViewInfoBody">
                    {props.item?.ProductName}
                  </div>
                </div>
                <div className="OrderViewInfo">
                  <div className="OrderViewInfoHead">Status</div>
                  <div className="OrderViewInfoBody">{props.item?.Status}</div>
                </div>
                <div className="OrderViewInfo">
                  <div className="OrderViewInfoHead">Order Date</div>
                  <div className="OrderViewInfoBody">
                    {props.item?.OrderDate}
                  </div>
                </div>
                <div className="OrderViewInfo">
                  <div className="OrderViewInfoHead">Order Id</div>
                  <div className="OrderViewInfoBody">
                    {props.item?.ProductId}
                  </div>
                </div>
                <div className="OrderViewInfo">
                  <div className="OrderViewInfoHead">Color</div>
                  <div className="OrderViewInfoBody">
                    <div className="OrderSampleColor"></div>#{props.item?.Color}
                  </div>
                </div>
                <div className="OrderViewInfo">
                  <div className="OrderViewInfoHead">Price</div>
                  <div className="OrderViewInfoBody">{props.item?.Price}</div>
                </div>
                <div className="OrderViewInfo OrderVeiwAddressInfo">
                  <div className="OrderViewInfoHead">Address</div>
                  <div className="OrderViewInfoBody OrderViewInfoBodyAddress">
                    {props.item?.Address}
                  </div>
                </div>
              </div>
            </div>
            <div className="ViewOrderBtnsWrapper">
              <div className="EditOrderViewDetails ViewOrderBtn">
                Hold Product
              </div>
              <div className="EditOrderUpdateDetails ViewOrderBtn">
                Send Product
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ActionBtns;
