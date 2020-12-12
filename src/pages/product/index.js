import './style.css';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { productService } from '../../services';

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [productLoading, setProductDataLoading] = useState(false);

  useEffect(() => {
    setProductDataLoading(true);
    productService
      .productService(limit, offset, searchKey)
      .then((res) => {
        setDataProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
  }, [limit, offset, searchKey]);

  const listProduct = dataProduct.map((data) => {
    return (
      <ul key={data.id}>
        <h5>{data.name}</h5>
        <ul key={data.id}>
          <p className="p">
            ID: {data.id}, Varian: {data.variants[0].slug}
          </p>
        </ul>
      </ul>
    );
  });

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
      </div>
      <div className="product">
        {productLoading ? <p>Loading...</p> : listProduct}
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel="prev"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={5}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
          onPageChange={(e) => {
            setOffset(e.selected * limit);
          }}
        />
      </div>
    </div>
  );
};

export default Product;
