import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productSelectors,
  deleteProduct,
} from "../features/productSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <p class="panel-heading mt-5 is-size-4 is-family-secondary has-background-info has-text-white-bis">
        Update Resto Pak Haji Bedul
      </p>
      <div className="box mt-2">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Menu</th>
              <th>Price (Rp)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={"edit/${product.id}"}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => dispatch(deleteProduct(product.id))}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to="add"
          className="button is-succes mb-3 has-background-info has-text-white-bis"
        >
          Add New
        </Link>
      </div>
    </>
  );
};

export default ShowProduct;
