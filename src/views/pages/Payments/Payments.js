
import React, { useEffect, useState } from 'react';
import config from 'src/config';

const Payments = ({ }) => {
  const [products, setProducts] = useState([]);
  const [vendorId] = useState("65b8831c688c1f86adf4ed19")
  useEffect(() => {
    // Fetch products for the vendor based on vendorId from the route params
    const vendorToken = localStorage.getItem('vendorToken');
    console.log(vendorToken)
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.baseURL}/vendors/${vendorId}/products`, {
          headers: {
            'Authorization': vendorToken,
          },
        });
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [vendorId]);

  return (
    <div className="">
        <h2 className="fw-dark fs-4">Payments</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product image</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>wwww2222222</td>
            <td>iphone</td>
            <td>modified</td>
            <td>img</td>
            <td>13000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>wwww2222222</td>
            <td>iphone</td>
            <td>modified</td>
            <td>img</td>
            <td>13000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>wwww2222222</td>
            <td>iphone</td>
            <td>modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg modified egwgrgwrgg</td>
            <td>img</td>
            <td>13000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
