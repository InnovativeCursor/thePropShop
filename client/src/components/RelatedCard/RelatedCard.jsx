import React from 'react';

function RelatedCard({ productName, budget, imageUrl }) {
  return (
    <div className='card related-search-content'>
      <img className='responsive-img' style={{width: "547.26px", height: "250px"}} src={imageUrl} alt="Product" />
      <div className='card-content' style={{display: "grid"}}>
        <span style={{textAlign: "left", marginBottom: "10px", fontWeight: "600", fontSize: "18px"}}>{productName}</span>
        <span style={{textAlign: "left", marginBottom: "15px", fontWeight: "600", fontSize: "18px"}}>${budget.toFixed(2)}</span>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <button style={{fontSize: "13px"}} className='btn btn-primary'>View Details</button>
          <button style={{fontSize: "13px"}} className='btn btn-secondary'>Customise Design</button>
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
