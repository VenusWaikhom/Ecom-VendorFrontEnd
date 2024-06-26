import { Box, Modal } from "@mui/material";
import React from "react";
import { TfiEye, TfiPencil } from "react-icons/tfi";

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

function PaymentActionBtn(props) {
  console.log(props);
  const [OpenView, SetOpenView] = React.useState(false);
  function handleCloseView() {
    SetOpenView(false);
  }

  return (
    <div className="OrderTableItemActionBtns">
      <div
        className="OrderTableItemActionViewBtn"
        onClick={() => {
          SetOpenView(true);
        }}
      >
        <TfiEye />
      </div>
      <div className="OrderTableItemActionEditBtn">
        <TfiPencil />
      </div>
      <Modal
        open={OpenView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="OrderModelWrapper" style={{ gap: "0.5rem" }}>
            <div className="PaymentViewModel">
              <div className="PaymentViewModelHead">
                <div className="PaumentViewModelHeader">
                  View Payment Details
                </div>
                <div className="PaumentViewModelHeader">Transaction ID</div>
                <div className="PaumentViewModelHeaderId">
                  {props?.data?.TransactionId}
                </div>
              </div>
              <div className="PaymentViewTableWrapper">
                <div className="PaymentViewTableHead">
                  <div className="PaymentViewTableHeader">Date</div>
                  <div className="PaymentViewTableHeader">Pareticular</div>
                  <div className="PaymentViewTableHeader">Amount</div>
                </div>
                <div className="PaymentViewTableBody">
                  <div className="PaymentViewTableBodyer">
                    {props?.data?.Date}
                  </div>
                  <div className="PaymentViewTableBodyer">
                    {props?.data?.Name}
                  </div>
                  <div className="PaymentViewTableBodyer">
                    ₹{props?.data?.Total}
                  </div>
                </div>
              </div>
              <div className="PaymentViewTotalWrapper">
                <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                  Total
                </span>{" "}
                ₹{props?.data?.Total}
              </div>
              <div className="PaymentViewBtnWtapper">
                <div
                  className="PaymentViewBtn PaymentViewBtnBack"
                  onClick={handleCloseView}
                >
                  Back
                </div>
                <div className="PaymentViewBtn PaymentViewBtnDownload">
                  Download
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PaymentActionBtn;
