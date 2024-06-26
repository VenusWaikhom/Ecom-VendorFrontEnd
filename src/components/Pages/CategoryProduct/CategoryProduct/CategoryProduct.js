import React from "react";
import { SideBar } from "../../../common/SideBar/SideMenu";
import TopBar from "../../../common/TopBar/TopBar";
import { FaGreaterThan } from "react-icons/fa";
import { CategoryProductItems } from "./CateGoryPtoductItems";
import "./CategoryProduct.css";
import Edit from "../../EditIcon/Edit";
import Delete from "../../DeleteIcon/Delete";

function CategoryProduct(tittle) {
  return (
    <div
      style={{
        borderRadius: 30,
        paddingLeft: 230,
      }}
    >
      <div style={{ background: "#1e1e1e" }}>
        <SideBar />
      </div>
      <div className="ProductMainWrapper">
        <TopBar tittle="Product" />
        <div className="CategoryProductHead">
          Product
          <FaGreaterThan style={{ fontSize: "0.5rem" }} />
          {/* {tittle} */}
        </div>
        <div className="CategoryProductTable">
          <div className="CategoryProductTableHeader">
            <div className="CategoryProductTableHead">Product</div>
            <div className="CategoryProductTableHead">Name</div>
            <div className="CategoryProductTableHead">Stock</div>
            <div className="CategoryProductTableHead">Color</div>
            <div className="CategoryProductTableHead">Size</div>
            <div className="CategoryProductTableHead">Price</div>
            <div className="CategoryProductTableHead">GST</div>
            <div className="CategoryProductTableHead">Total</div>
            <div className="CategoryProductTableHead">Action</div>
          </div>
          <div className="CategoryProductItems">
            {CategoryProductItems.map((item, id) => {
              return (
                <div className="CategoryProductItemWrapper" key={id}>
                  <div className="CategoryProductItem CategoryProductImages">
                    {item?.image}
                  </div>
                  <div className="CategoryProductItem">{item?.ProductName}</div>
                  <div className="CategoryProductItem">{item?.Stock}</div>
                  <div className="CategoryProductItem">{item?.Color}</div>
                  <div className="CategoryProductItem">{item?.Size}</div>
                  <div className="CategoryProductItem">₹{item?.Price}</div>
                  <div className="CategoryProductItem">₹{item?.GST}</div>
                  <div className="CategoryProductItem">
                    ₹{item?.Price + item?.GST}
                  </div>
                  <div className="CategoryProductItem">
                    <div className="CategoryProductActionButtonWrapper">
                      <div className="TableIcon View">
                        <Edit />
                      </div>
                      <div className="TableIcon Delete">
                        <Delete />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="CategotyProductButtonsWrapper">
          <div></div>
          <div className="CategoryProductButtons">
            <div className="CategoryProductButton CategoryProductButtonManage">
              Manage
            </div>
            <a
              href="/Product/AddNewProduct"
              className="CategoryProductButton CategoryProductButtonAddNew"
            >
              + Add New
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProduct;
