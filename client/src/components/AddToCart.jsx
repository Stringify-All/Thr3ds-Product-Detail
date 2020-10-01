import React, { useState } from 'react';
import AddItemButton from './buttons/AddItemButton';
import QuantityButton from './buttons/QuantitySelector';
import SelectSizeButton from './buttons/SizeSelector';
import styled from 'styled-components';
import { SkipNextOutlined } from '@material-ui/icons';

const AddItem = ({styleData}) => {
  const name = styleData.name;
  const price = styleData.original_price - styleData.sale_price;
  const [selectedSize, setSelectedSize] = useState('');
  
  const cartValues = {
    name: name,
    price: price,
    size: selectedSize,
    quantity: null,
    added: false,
  };

  console.log('cart values: ', cartValues);

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <SelectSizeButton sizes={styleData} 
            sizeSelector={setSelectedSize}/>
          </div>
          <div class="col-md-4">
            <QuantityButton quantities={styleData}/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10">
            <AddItemButton />
          </div>
          <div class="col-md-2">
            <button>*</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem;