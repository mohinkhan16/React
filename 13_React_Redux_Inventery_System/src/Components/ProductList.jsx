
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDetele, setEditval } from "../Features/InventerySlice";

const ProductList = () => {
  const product = useSelector((state) => state.inventory.products);

  const dispatch = useDispatch();

  return (
    <>
      {product.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Category</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {product.map((p, index) => (
              <tr key={p.id || index}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.qty}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>

                <td>
                  <button onClick={() => dispatch(setEditval(p))}>
                    Edit
                  </button>
                </td>

                <td>
                  <button onClick={() => dispatch(handleDetele(p.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No Products Data found</h1>
      )}
    </>
  );
};

export default ProductList;
