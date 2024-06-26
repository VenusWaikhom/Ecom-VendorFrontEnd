import React, { useCallback, useState } from "react";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import { RiFilter2Line } from "react-icons/ri";
// import { TableItems } from "../Home/TableItems";
import Delete from "../DeleteIcon/Delete";
import Edit from "../EditIcon/Edit";
import { useEffect } from "react";
import { Box, Modal } from "@mui/material";
import { useSearchParams } from "react-router-dom";

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

export const ProductBottom = () => {
  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);
  const [Data, setData] = React.useState([]);

  const [searchParams] = useSearchParams();

  const [openByPrice, setOpenByPrice] = React.useState(false);
  const [openByProduct, setOpenByProduct] = React.useState(false);
  const [openByDate, setOpenByDate] = React.useState(false);
  const [openByRecent, setOpenByRecent] = React.useState(false);
  const [openByAZ, setOpenByAZ] = React.useState(false);
  const handleOpenByPrice = () => {
    setOpenByPrice(true);
    setOpenByProduct(false);
    setOpenByDate(false);
    setOpenByRecent(false);
    setOpenByAZ(false);
  };
  const handleOpenByProduct = () => {
    setOpenByPrice(false);
    setOpenByProduct(true);
    setOpenByDate(false);
    setOpenByRecent(false);
    setOpenByAZ(false);
  };
  const handleOpenByDate = () => {
    setOpenByPrice(false);
    setOpenByProduct(false);
    setOpenByDate(true);
    setOpenByRecent(false);
    setOpenByAZ(false);
  };
  const handleOpenByRecent = () => {
    setOpenByPrice(false);
    setOpenByProduct(false);
    setOpenByDate(false);
    setOpenByRecent(true);
    setOpenByAZ(false);
  };
  const handleOpenByAZ = () => {
    setOpenByPrice(false);
    setOpenByProduct(false);
    setOpenByDate(false);
    setOpenByRecent(false);
    setOpenByAZ(true);
  };

  const [openFilter, setOpenFilter] = React.useState(false);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);
  const [flter, setfilter] = useState();

  const fetchData = useCallback(() => {
    fetch(
      "http://localhost:3000/items" +
        (searchParams.get("search")?.length > 3
          ? "?search=" + searchParams.get("search")
          : ""),
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, [searchParams.get("search")]);

  useEffect(() => {
    console.log(searchParams.get("search"));
    fetchData();
  }, [searchParams.get("search")]);

  console.log(Data);

  return (
    <div className="BottomProductWrapper">
      <div className="BottomProductItemHead">
        <div className="BottomProductItemheader">Product List</div>
        <div className="ProductMiddleIcons">
          <div
            className="ProductMiddleIcon ProductFilterIcon"
            onClick={handleOpenFilter}
          >
            Filter
            <RiFilter2Line />
          </div>
          <a
            href="/Product/NewProduct"
            className="ProductMiddleIcon ProductAddIcon"
          >
            +Add Product
          </a>
        </div>
      </div>
      <div className="ProductBottomItemListHeader">
        <div style={{ height: "6rem", width: "84vw" }}>
          <div
            style={{
              margin: " 0  0.5rem 0.5rem 0.5rem",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="Table ProductTable">
              <div className="TableItems">Product Image</div>
              <div className="TableItems">Product Name</div>
              <div className="TableItems">Stock</div>
              <div className="TableItems">GST %</div>
              <div className="TableItems">GST Type</div>
              <div className="TableItems">Action</div>
            </div>
            <div
              style={{
                height: "5.8rem",
                overflow: "scroll",
                marginTop: "0.2rem",
              }}
            >
              {Data?.reverse().map((item) => (
                <div
                  className="Table ProductTableitems ProductTable"
                  key={item?._id}
                >
                  <div className="TableItems photo">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={
                        "http://localhost:3000" +
                        item?.image1?.replaceAll(" ", "%20")
                      }
                      alt="pimage"
                    />
                  </div>
                  <div className="TableItems">{item?.producename}</div>
                  <div className="TableItems">{item?.stock}</div>
                  <div className="TableItems">{item?.GSTPC}</div>
                  <div className="TableItems">{item?.GSTtype}</div>
                  <div className="TableItems TableIconWrapper">
                    <div className="TableIcon ProductTableIcon">
                      <AiOutlineEye data={item} onClick={handleOpenView} />
                    </div>
                    <div>
                      <Edit data={item} EditFinishCallback={fetchData} />
                    </div>
                    <div>
                      <Delete id={item._id} deleteFinishCallback={fetchData} />
                    </div>
                  </div>
                  <Modal
                    open={openView}
                    onClose={handleCloseView}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className="OrderModelWrapper">
                        <div className="OrderModelTop">
                          <div className="Header">View Product</div>
                          <div className="Close" onClick={handleCloseView}>
                            <AiOutlineClose />
                          </div>
                        </div>
                        <div className="OrderModelMiddle">
                          <div className="OrderViewLeftWrapper">
                            <div className="OrderViewImageWrapper">
                              <img
                                style={{ width: "100%", height: "100%" }}
                                src={
                                  "http://localhost:3000" +
                                  item?.image1?.replaceAll(" ", "%20")
                                }
                                alt="pimage"
                              />
                            </div>
                          </div>
                          <div className="OrderViewRightItem">
                            <div className="OrderViewInfo">
                              <div className="OrderViewInfoHead">Product</div>
                              <div className="OrderViewInfoBody">
                                {item?.producename}
                              </div>
                            </div>
                            <div className="OrderViewInfo">
                              <div className="OrderViewInfoHead">Stock</div>
                              <div className="OrderViewInfoBody">
                                {item?.stock}
                              </div>
                            </div>
                            <div className="OrderViewInfo">
                              <div className="OrderViewInfoHead">Category</div>
                              <div className="OrderViewInfoBody">
                                {item?.category}
                              </div>
                            </div>
                            <div className="OrderViewInfo">
                              <div className="OrderViewInfoHead">GST%</div>
                              <div className="OrderViewInfoBody">
                                {item?.GSTPC}
                              </div>
                            </div>
                            <div className="OrderViewInfo">
                              <div className="OrderViewInfoHead">Color</div>
                              <div className="OrderViewInfoBody">
                                <div className="OrderSampleColor"></div>#
                                {item?.Color}
                              </div>
                            </div>
                            <div className="OrderViewInfo">
                              <div className="OrderViewInfoHead">Price</div>
                              <div className="OrderViewInfoBody">
                                ₹ {item?.price}
                              </div>
                            </div>
                            <div className="OrderViewInfo OrderVeiwAddressInfo">
                              <div className="OrderViewInfoHead">
                                Description
                              </div>
                              <div className="OrderViewInfoBody OrderViewInfoBodyAddress">
                                {item?.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openFilter}
        onClose={handleCloseFilter}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="OrderModelWrapper" style={{ gap: "0.5rem" }}>
            <div className="OrderModelTop">
              <div className="Header">Filter</div>
              <div className="Close" onClick={handleCloseFilter}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="FilterItemsWrapper">
              <div className="FilterItemWrapper" onClick={handleOpenByPrice}>
                <div className="FilterHead">
                  <div
                    className={openByPrice ? "Radio ActiveRadio" : "Radio"}
                  ></div>
                  <div className="FilterHeader">By Price</div>
                </div>
                <div
                  className={
                    openByPrice ? " ActiveFilterOption" : "FilterOption"
                  }
                >
                  <div
                    className="Options"
                    onclick={() => {
                      setData(Data.filter((item) => item.price <= 500));
                    }}
                  >
                    Below 500
                  </div>
                  <div className="Options">500 - 1000</div>
                  <div className="Options">1000 - 5000</div>
                  <div className="Options">Above 5000</div>
                  <div className="OtherOption">+</div>
                </div>
              </div>
              <div className="FilterItemWrapper " onClick={handleOpenByProduct}>
                <div className="FilterHead">
                  <div
                    className={openByProduct ? "Radio ActiveRadio" : "Radio"}
                  ></div>
                  <div className="FilterHeader">By Prouct</div>
                </div>
                <div
                  className={
                    openByProduct ? " ActiveFilterOption" : "FilterOption"
                  }
                >
                  <div className="Options">Below 500</div>
                  <div className="Options">500 - 1000</div>
                  <div className="Options">1000 - 5000</div>
                  <div className="Options">Above 5000</div>
                  <div className="OtherOption">+</div>
                </div>
              </div>
              <div className="FilterItemWrapper" onClick={handleOpenByDate}>
                <div className="FilterHead">
                  <div
                    className={openByDate ? "Radio ActiveRadio" : "Radio"}
                  ></div>
                  <div className="FilterHeader">By Date</div>
                </div>
                <div
                  className={
                    openByDate ? " ActiveFilterOption" : "FilterOption"
                  }
                >
                  <div className="Options">Below 500</div>
                  <div className="Options">500 - 1000</div>
                  <div className="Options">1000 - 5000</div>
                  <div className="Options">Above 5000</div>
                  <div className="OtherOption">+</div>
                </div>
              </div>
              <div className="FilterItemWrapper" onClick={handleOpenByRecent}>
                <div className="FilterHead">
                  <div
                    className={openByRecent ? "Radio ActiveRadio" : "Radio"}
                  ></div>
                  <div className="FilterHeader">By Recent</div>
                </div>
                <div
                  className={
                    openByRecent ? " ActiveFilterOption" : "FilterOption"
                  }
                >
                  <div className="Options">Below 500</div>
                  <div className="Options">500 - 1000</div>
                  <div className="Options">1000 - 5000</div>
                  <div className="Options">Above 5000</div>
                  <div className="OtherOption">+</div>
                </div>
              </div>
              <div className="FilterItemWrapper" onClick={handleOpenByAZ}>
                <div className="FilterHead">
                  <div
                    className={openByAZ ? "Radio ActiveRadio" : "Radio"}
                  ></div>
                  <div className="FilterHeader">By A-Z</div>
                </div>
                <div
                  className={openByAZ ? " ActiveFilterOption" : "FilterOption"}
                >
                  <div className="Options">Below 500</div>
                  <div className="Options">500 - 1000</div>
                  <div className="Options">1000 - 5000</div>
                  <div className="Options">Above 5000</div>
                  <div className="OtherOption">+</div>
                </div>
              </div>
            </div>
            <div className="EditOrderBtnsWrapper">
              <div className="EditOrderViewDetails EditOrderBtn">
                View Details
              </div>
              <div className="EditOrderUpdateDetails EditOrderBtn">
                Update Details
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
