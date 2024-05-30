import { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import SelectDropDown from '../components/SelectDropDown/SelectDropDown';
import endpoints from '../config/endpoints';
import { fetchDataGet } from '../utils/fetchData';
import MultipleSelectDropDown from '../components/MultipleSelectDropDown/MultipleSelectDropDown';
import RelatedCard from '../components/RelatedCard/RelatedCard';

const RelatedSearch = () => {
  const [products, setProducts] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [boothsizeOptions, setBoothsizeOptions] = useState([]);
  const [budgetOptions, setBudgetOptions] = useState([]);
  const [secondaryOptions, setSecondaryOptions] = useState([]);
  const [functionRequest, setFunctionRequest] = useState([]);

  const fetchOptions = async () => {
   
    try {
      const locationResponse = await fetchDataGet(endpoints.locationOptions);
      if (locationResponse) {
        setLocationOptions(locationResponse);
      } else {
        console.error("Error fetching location options:", locationResponse);
      }

      // Assuming you have similar endpoints for booth size and budget options
      const boothsizeResponse = await fetchDataGet(endpoints.boothsizeOptions);
      if (boothsizeResponse) {
        setBoothsizeOptions(boothsizeResponse);
      } else {
        console.error("Error fetching booth size options:", boothsizeResponse);
      }

      const budgetResponse = await fetchDataGet(endpoints.budgetOptions);
      if (budgetResponse) {
        setBudgetOptions(budgetResponse);
      } else {
        console.error("Error fetching budget options:", budgetResponse);
      }

      const secondaryResponse =  await fetchDataGet(endpoints.secondaryOptions);
      if(secondaryResponse) { 
        setSecondaryOptions(secondaryResponse);
      } else {
        console.error("Error fetching secondary options:", secondaryResponse)
      }

      const functionResponse =  await fetchDataGet(endpoints.functionalReq);
      if(functionResponse) { 
        setFunctionRequest(functionResponse);
      } else {
        console.error("Error fetching secondary options:", functionResponse)
      }

    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const productsResponse = await fetchDataGet(endpoints.products);
      if (Array.isArray(productsResponse)) {
        setProducts(productsResponse); // Assuming the response is already an array of products
      } else if (Array.isArray(productsResponse.products)) {
        setProducts(productsResponse.products); // If the products are nested under a 'products' property
      } else {
        console.error("Error: Unexpected response structure:", productsResponse);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  


  useEffect(() => {
    M.AutoInit();
    fetchOptions();
    fetchProducts()
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col l3 header-related-work">
          <h3>67 Products Found</h3>
        </div>
        <div className="col l9">
          <div className="chip">
            Example Chip
            <i className="close material-icons">close</i>
          </div>
          <div className="chip">
            Another Chip
            <i className="close material-icons">close</i>
          </div>
          <div className="chip">
            Yet Another Chip
            <i className="close material-icons">close</i>
          </div>
        </div>
      </div>

      <div className='row'>
        {/* Column for cards */}
        <div className='col l8 s12'>
          <div className='row'>
     
            {products.map((product) => (
  <div key={product.prd_id} className='col l6 s12'>
    <RelatedCard
      productName={product.product_name}
      budget={product.budget}
      imageUrl={product.pictures[0].url}
    />
  </div>
))}
            
          

            {/* Add more product cards as needed */}
          </div>
        </div>

        {/* Column for filters */}
        <div className='col l4 s12'>
          <div className='card'>
           
              <SelectDropDown options={locationOptions} placeholder="Select Location" />
              <SelectDropDown options={boothsizeOptions} placeholder="Select Booth Size" />
              <SelectDropDown options={budgetOptions} placeholder="Select Budget" />
              <SelectDropDown options={secondaryOptions} placeholder="No of Demo Stations" />
              <SelectDropDown options={secondaryOptions} placeholder="Closed Meeting Room" />


              <MultipleSelectDropDown options={functionRequest} placeholder="More Options"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedSearch;
