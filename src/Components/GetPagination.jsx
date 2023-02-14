import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCardCategories from "./ProductCardCagetories";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

// function PaginatedItems({ itemsPerPage }) {

// }

const GetPagination = (props) => {
  const { data } = props;
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      {currentItems.map((item, index) => (
        <div className="col-md-4" key={index}>
          <ProductCardCategories item={item} />
        </div>
      ))}
      <div className="pagination-heading">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-icon"
          nextLinkClassName="page-icon"
          activeLinkClassName="active"
        />
      </div>
    </>
  );
};

export default GetPagination;
