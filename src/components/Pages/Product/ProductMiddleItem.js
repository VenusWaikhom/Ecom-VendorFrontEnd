import React from "react";
import { CategoryItem } from "./ProductCategory";

export const ProductMiddleItem = () => {
  return (
    <div className="ProductMiddleWrapper">
      <div className="ProductMiddleHead">
        <div className="ProductMiddleHeader">Top Product</div>
      </div>
      <div className="ProductItems">
        {CategoryItem.map((item, id) => {
          return (
            <div className="ProductItem" key={id}>
              {item?.Image}
            </div>
          );
        })}
      </div>
    </div>
  );
};
