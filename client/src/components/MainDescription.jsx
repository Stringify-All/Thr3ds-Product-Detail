import React from 'react';
import styled from 'styled-components';
// will need star elements

const ProductDescription = ({selected}) => {

  return ( 
    <>
      <div>* * * * * ratings here</div>
      <div>
        {selected.category}
      </div>
      <div> 
        <h3>{selected.name}</h3>
      </div>
      <div>
        ${selected.default_price}
      </div>
    </>
  );
}

export default ProductDescription;