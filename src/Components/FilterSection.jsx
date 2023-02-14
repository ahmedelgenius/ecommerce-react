import React, { useState } from "react";
import { ProductsForCategories } from "../data";

const FilterSection = () => {
  const [categoryName, setCategoryName] = useState("");
  const [productsAfterFilter, setProductAfterFilter] = useState([]);
  console.log(categoryName);
  //   const [newVal, setNewVal] = useState([]);
  //   const getUniqueData = (data, property) => {
  //     let newVal = data.map((item) => {
  //       return item[property];
  //     });
  //     newVal = [...new Set(newVal)];
  //     setNewVal(newVal);
  //   };
  //   const categoryOnlyData = getUniqueData(ProductsForCategories, "category");
  if (categoryName) {
    const productsFilter = ProductsForCategories.filter((item) => {
      return item.category === categoryName;
    });
  }
  return <></>;
};

export default FilterSection;
