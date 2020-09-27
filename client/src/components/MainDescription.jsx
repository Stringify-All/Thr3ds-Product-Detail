import React from 'react';
import styled from 'styled-components';
// will need star elements

const ProductDescription = ({selected}) => {

  return ( 
    <React.Fragment>
      <div> 
        {selected.name} 
      </div>
      <div>
        {selected.description}
      </div>
    </React.Fragment>
  );
}

export default ProductDescription;