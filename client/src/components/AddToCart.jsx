import React, { useState } from 'react';
import AddItemButton from './buttons/AddItemButton';
import QuantityButton from './buttons/QuantitySelector';
import SelectSizeButton from './buttons/SizeSelector';
import styled from 'styled-components';

const AddItem = ({cartData}) => {
  const [size, setSize] = useState(cartData[0])

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <SelectSizeButton sizes={cartData}/>
          </div>
          <div class="col-md-4">
            <QuantityButton quantities={cartData}/>
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