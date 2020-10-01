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
  const [quantity, setQuantity] = useState(1)
  
  const cartValues = {
    name: name,
    price: price,
    size: selectedSize,
    quantity: quantity,
    added: false,
    total_price: (price * quantity),
  };

  console.log('cart values: ', cartValues);

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <SelectSizeButton sizes={styleData} 
            sizeSelector={setSelectedSize}
            size={selectedSize}/>
          </div>
          <div class="col-md-4">
            <QuantityButton quantities={styleData}
            quantitySelector={setQuantity}
            size={selectedSize}/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10">
            <AddItemButton cartValues={cartValues}/>
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