import React, { useState } from 'react';
import AddItemButton from './buttons/AddItemButton';
import QuantityButton from './buttons/QuantitySelector';
import SelectSizeButton from './buttons/SizeSelector';
import addToCart from '../API/PostCart.js';

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
            {selectedSize ? <QuantityButton quantities={styleData}
            quantitySelector={setQuantity}
            size={selectedSize}/> : <div></div>}
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <AddItemButton cartValues={cartValues}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem;